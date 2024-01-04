/*

id (unique identifier)
name (string, 1-50 characters)
picture (string, URL)
description (string)
gender ("male" and "female" as options)
category ("makeup", "skincare" and "haircare" as options)
price (number)
created_at (timestamp, automatically set when product is created)
updated_at (timestamp, automatically updated when product is updated)
*/

const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: { type: String },
    picture: { type: String },
    description: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    category: { type: String, enum: ["makeup", "skincare", "haircare"] },
    price: { type: Number },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);
module.exports = { productModel };
