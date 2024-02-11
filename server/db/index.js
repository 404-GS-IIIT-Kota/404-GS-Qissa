const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://aaryan9:%40Premnagar9@cluster0.z9gickp.mongodb.net/"
);

// Schema
const UserSchema = new mongoose.Schema({
  firstname: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  country: String,
  birthday: String,
  gender: String,
  pronouns: String,
  bio: String,
  userPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const PostSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  imageLink: String,
});

const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);

module.exports = {
  User,
  Post,
};
