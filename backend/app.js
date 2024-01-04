const express = require("express");
const app = express();
const cors = require("cors");
const { UserRoute } = require("./routes/userRoutes");
const { productRoute } = require("./routes/productRoutes");

app.use(cors());
app.use(express.json());

app.use("/api", UserRoute);
app.use("/api/products", productRoute);

module.exports = { app };
