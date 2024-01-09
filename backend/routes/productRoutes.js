const express = require("express");
const {
  getProduct,
  getSinglProduct,
  postProduct,
  patchProduct,
  deleteProduct,
  ProductChart,
} = require("../controllers/productControllers");
const productRoute = express.Router();

productRoute.route("/").get(getProduct);
productRoute.route("/").post(postProduct);
productRoute.route("/:_id").get(getSinglProduct);
productRoute.route("/:_id").patch(patchProduct);
productRoute.route("/:_id").delete(deleteProduct);
productRoute.route("/category/chart").get(ProductChart);

module.exports = { productRoute };
