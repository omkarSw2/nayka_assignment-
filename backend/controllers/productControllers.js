const { productModel } = require("../models/productModel");

const getProduct = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const genderFilter = req.query.gender || null;
    const categoryFilter = req.query.category || null;
    const sortField = req.query.sortBy || "price";
    const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

    const skip = (page - 1) * limit;

    // Build the match object based on filters
    const match = {};
    if (genderFilter) {
      match.gender = genderFilter;
    }
    if (categoryFilter) {
      match.category = categoryFilter;
    }

    // Add the aggregation pipeline stages
    const products = await productModel
      .aggregate([
        { $match: match }, // Filter by gender and category
        { $sort: { [sortField]: sortOrder } }, // Sorting based on the specified field and order
        { $skip: skip },
        { $limit: limit },
      ])
      .exec();

    const totalProducts = await productModel.countDocuments(match);
    const totalPages = Math.ceil(totalProducts / limit);

    return res.status(200).send({
      status: true,
      msg: "get product successfully!",
      products,
      totalPages,
      currentPage: page,
      limit,
      totalProducts,
    });
  } catch (error) {
    return res.status(401).send({
      status: false,
      msg: "error fetching products",
      error: error.message,
    });
  }
};

const getSinglProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const singleUser = await productModel.findOne({ _id });
    return res.status(200).send({
      status: true,
      msg: "get sigle product by ID successsfull",
      singleUser,
    });
  } catch (error) {
    return res.status(401).send({
      status: false,
      msg: "error fetching  Single product",
      error: error.message,
    });
  }
};

const postProduct = async (req, res) => {
  try {
    const product = await productModel(req.body);
    product.save();
    return res
      .status(200)
      .send({ status: true, msg: "Product Posted Succesfully.", product });
  } catch (error) {
    return res.status(401).send({
      status: false,
      msg: "error Posting product",
      error: error.message,
    });
  }
};

const patchProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const updataeProduct = await productModel.findByIdAndUpdate(
      { _id },
      req.body,
      { new: true }
    );

    return res.status(200).send({
      status: true,
      msg: "Product Updated Successfully.!",
      updataeProduct,
    });
  } catch (error) {
    return res.status(401).send({
      status: false,
      msg: "error Updating  product",
      error: error.message,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete({ _id });

    return res.status(200).send({
      status: true,
      msg: "Product Deleted Successfully.!",
      deletedProduct,
    });
  } catch (error) {
    return res.status(401).send({
      status: false,
      msg: "error while Deleting  product",
      error: error.message,
    });
  }
};

const GenderChart = async (req, res) => {
  try {
    const genderChart = [
      {
        $group: {
          _id: "$gender",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          gender: "$_id",
          count: 1,
          _id: 0,
        },
      },
    ];

    const productChart = await productModel.aggregate(genderChart);

    return res.status(200).send({
      status: true,
      msg: "Product Fetching Gender Chart Successfully.!",
      productChart,
    });
  } catch (error) {
    return res.status(401).send({
      status: false,
      msg: "error Fetching Gender Chart",
      error: error.message,
    });
  }
};
const ProductChart = async (req, res) => {
  try {
    const categoryChart = [
      {
        $group: {
          _id: "$category",
          count: {
            $sum: 1,
          },
        },
      },
      {
        $project: {
          category: "$_id",
          count: 1,
          _id: 0,
        },
      },
    ];
    const productChart = await productModel.aggregate(categoryChart);

    return res.status(200).send({
      status: true,
      msg: "Product Fetching Category Chart Successfully.!",
      productChart,
    });
  } catch (error) {
    return res.status(401).send({
      status: false,
      msg: "error Fetching Category Chart  product",
      error: error.message,
    });
  }
};
module.exports = {
  getProduct,
  getSinglProduct,
  postProduct,
  patchProduct,
  deleteProduct,
  ProductChart,
  GenderChart,
};
