import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new Schema(
  {
    firstName: {
      type: "String",
      required: [true, "Name is required"],
      minLength: [5, "Name must be atleast 5 charachter"],
      maxLength: [50, "Name should be less than 50 charachter"],
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: "String",
      required: [true, "Name is required"],
      minLength: [5, "Name must be atleast 5 charachter"],
      maxLength: [50, "Name should be less than 50 charachter"],
      lowercase: true,
      trim: true,
    },
    userName: {
      type: "String",
      required: [true, "Name is required"],
      minLength: [5, "Name must be at least 5 characters"],
      maxLength: [50, "Name should be less than 50 characters"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: "String",
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please fill in a valid email address",
      ],
    },
    password: {
      type: "String",
      required: [true, "Password is required"],
      minLength: [8, "Password must be atleast 8 charachter"],
      select: false,
    },
    country: {
      type: "String",
    },
    birthday: {
      type: "String",
    }, // commented by dhairya intentionally
    gender: {
      type: "String",
    },
    pronouns: {
      type: "String",
    },
    bio: {
      type: "String",
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  {
    timestamps: true,
  }
);

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
});

const postSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: [commentSchema],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hash(this.password, 10);
});

userSchema.methods = {
  generateJWTToken: async function () {
    return jwt.sign(
      { id: this._id, email: this.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY,
      }
    );
  },
  comparePassword: async function (plainTextPassword) {
    return await bcrypt.compare(plainTextPassword, this.password);
  },
  generatePasswordResetToken: async function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.forgotPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000;

    return resetToken;
  },
};

const User = model("User", userSchema);
const Post = model("Post", postSchema);
export { User, Post };
