import AppError from "../utils/error.util.js";
import { User } from "../models/user.model.js";
import { Post } from "../models/user.model.js";
import cloudinary from "cloudinary";
import sendEmail from "../utils/sendEmail.js";
import validator from "validator";
import bcrypt from "bcrypt";
import crypto from "crypto"; // Add crypto module import for generating hash
import jwt from "jsonwebtoken";

const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
  httpOnly: true,
  // secure: true,
};

const register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      country,
      gender,
      pronoun,
      bio,
      birthday,
    } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return next(new AppError("Email already exists", 400));
    }

    if (!password) {
      return next(new AppError("Password is required", 400));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      country,
      gender,
      pronoun,
      bio,
      birthday,
      // avatar: {
      //   public_id: email,
      //   secure_url:
      //     "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg",
      // },   //  intentionally commented out by dhairya
    });

    if (!user) {
      return next(
        new AppError("User registration failed, please try again", 400)
      );
    }

    if (!validator.isEmail(email)) {
      return next(new AppError("Invalid email", 402));
    }

    user.password = undefined;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return next(new AppError("All fields are required", 400));
    }

    const user = await User.findOne({ userName }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new AppError("userName or password does not match", 400));
    }
    // const id = user._id.toString();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    user.password = undefined;
    res.cookie("jwt", token, cookieOptions).status(201).json("ok"); // Save token in cookie
    // console.log("cookie", req.cookies);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
      cookies: token,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const logout = (req, res) => {
  res.cookie("jwt", null, {
    secure: true,
    maxAge: 0,
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
};

const post = async (req, res, next) => {
  try {
    const caption = req.body.caption;
    const url = req.body.url; //cloudinary manage
    const channel = req.body.channel;
    const jwt = req.headers.cookies; // check if cookie is in headers or some other place
    const jwtPayload = jwt.verify(jwt, process.env.JWT_SECRET);
    const postedBy = jwtPayload.userId;
    await Post.create({ caption, url, channel, postedBy });
  } catch (error) {
    return next(new AppError("Failed to post", 500));
  }
};

const getProfile = async (req, res, next) => {
  try {
    const jwt = req.headers.cookies; // check if cookie is in headers or some other place
    const jwtPayload = jwt.verify(jwt, process.env.JWT_SECRET);
    const userId = jwtPayload.userId;
    const user = await User.findById(userId)
      .select("userName birthday bio country gender pronoun posts") // Include the 'posts' field
      .populate({
        path: "posts",
        select: "url caption likes comments channel postedAt",
        populate: {
          path: "comments",
          select: "text commentedBy commentedAt",
        },
        options: { sort: { postedAt: -1 } }, // Sort posts by postedAt field in descending order
      });

    // ab is token ko jaise yha backend me use krna hai waise use kro and frontend se jab call kro toh

    if (!user) {
      return next(new AppError("User not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "User details",
      user,
    });
  } catch (error) {
    return next(new AppError("Failed to fetch profile detail", 500));
  }
};

const comment = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { text } = req.body;
    const jwt = req.headers.cookies; // check if cookie is in headers or some other place
    const jwtPayload = jwt.verify(jwt, process.env.JWT_SECRET);
    const userId = jwtPayload.userId;
    const user = await User.findById(userId).select("userName");
    const newComment = new Comment({
      text,
      commentedBy: user.userName,
    });

    await newComment.save();

    const post = await Post.findById(postId);
    post.comments.push(newComment);

    await post.save();
    res.status(200).json({
      success: true,
      message: "Commented successfully",
    });
  } catch (error) {
    return next(new AppError("Failed to comment", 500));
  }
};

const postPage = async (req, res, next) => {
  try {
    const channel = req.body.channel;
    const posts = await Post.find({ channel });
    res.json({ success: true, posts });
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req, res, next) => {
  const { userName } = req.body;

  if (!userName) {
    return next(new AppError("userName is required", 400));
  }

  const user = await User.findOne({ userName });
  if (!user) {
    return next(new AppError("User name is not registered", 400));
  }

  const resetToken = crypto.randomBytes(20).toString("hex");
  user.forgotPasswordToken = resetToken;
  user.forgotPasswordExpiry = Date.now() + 3600000; // 1 hour

  await user.save();

  const resetPasswordURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  const subject = "Reset Password";
  const message = `You can reset your password by clicking <a href=${resetPasswordURL} target="_blank">Reset your password</a>\nIf the above link does not work for some reason then copy paste this link in new tab ${resetPasswordURL}.\n If you have not requested this, kindly ignore.`;

  try {
    await sendEmail(email, subject, message);

    res.status(200).json({
      success: true,
      message: `Reset password token has been sent to ${email} successfully`,
    });
  } catch (error) {
    user.forgotPasswordExpiry = undefined;
    user.forgotPasswordToken = undefined;

    await user.save();
    return next(new AppError(error.message, 500));
  }
};

const resetPassword = async (req, res, next) => {
  const { resetToken } = req.params;
  const { password } = req.body;

  const user = await User.findOne({
    forgotPasswordToken: resetToken,
    forgotPasswordExpiry: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new AppError("Token is invalid or expired, please try again", 400)
    );
  }

  user.password = await bcrypt.hash(password, 10);
  user.forgotPasswordToken = undefined;
  user.forgotPasswordExpiry = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password changed successfully!",
  });
};

const changePassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const { id } = req.user;

  if (!oldPassword || !newPassword) {
    return next(new AppError("All fields are mandatory", 400));
  }

  const user = await User.findById(id).select("+password");

  if (!user) {
    return next(new AppError("User doesn't exist", 400));
  }

  const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

  if (!isPasswordValid) {
    return next(new AppError("Invalid old password", 400));
  }

  user.password = await bcrypt.hash(newPassword, 10);

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password changed successfully!",
  });
};

const updateUser = async (req, res, next) => {
  try {
    const { firstName, lastName, userName } = req.body;
    const { id } = req.user;

    const user = await User.findById(id);

    if (!user) {
      return next(new AppError("User does not exist", 400));
    }

    if (firstName) {
      user.firstName = firstName;
    }

    if (lastName) {
      user.lastName = lastName;
    }

    if (userName) {
      user.userName = userName;
    }

    if (req.file) {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "qissaBackend",
        width: 250,
        height: 250,
        gravity: "faces",
        crop: "fill",
      });

      if (result) {
        user.avatar.public_id = result.public_id;
        user.avatar.secure_url = result.secure_url;

        // Remove file from server
        fs.unlinkSync(req.file.path);
      }
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Update profile successfully",
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

export {
  register,
  login,
  logout,
  getProfile,
  post,
  postPage,
  comment,
  forgotPassword,
  resetPassword,
  changePassword,
  updateUser,
};
