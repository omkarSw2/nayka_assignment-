const { productModel } = require("../models/productModel");

const getProduct = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;

    const skip = (page - 1) * limit;

    const products = await productModel.find().skip(skip).limit(limit);

    const totalProducts = await productModel.countDocuments();
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

module.exports = {
  getProduct,
  getSinglProduct,
  postProduct,
  patchProduct,
  deleteProduct,
};
