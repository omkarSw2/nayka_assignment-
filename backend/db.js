const mongoose = require("mongoose");

require("dotenv").config();

const ConnectDB = async () => {
  try {
    const Connection = await mongoose.connect(
      `${process.env.MONGO_URL}/${process.env.DB_NAME}`
    );
    console.log(`\nMongoDB Conected`);
  } catch (error) {
    console.log("MONGO Connetion Error ", error);
    process.exit(1);
  }
};
module.exports = { ConnectDB };
