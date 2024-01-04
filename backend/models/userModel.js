/**
 * 
 * id (unique identifier)
name (string, 1-50 characters)
avatar (string, URL)
email (string, valid email format)
password (string)
created_at (timestamp, automatically set when the user is created)
updated_at (timestamp, automatically updated when the user is updated)
 */

const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [1, "user name has to be at least 1 characters"],
      maxlength: [50, "user name has to be less than 50 characters"],
    },
    email: { type: String, unique: true, trim: true, lowercase: true },
    avatar: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
module.exports = { userModel };
