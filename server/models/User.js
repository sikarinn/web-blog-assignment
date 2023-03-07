const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    username: String,
    googleId: String,
    email: String,
    profilePic:String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         require: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     profilePic: {
//         type: String,
//         default: "",
//     },
//    },
//    { timestamps: true }
// );

// module.exports = mongoose.model("User", UserSchema);