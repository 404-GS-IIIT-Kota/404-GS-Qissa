import AppError from "../utils/error.util.js";
import { User } from "../models/user.model.js";
import cloudinary from "cloudinary";
import sendEmail from "../utils/sendEmail.js";
import bcrypt from "bcrypt";
import crypto from "crypto"; // Add crypto module import for generating hash

const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
  httpOnly: true,
  secure: true,
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
      avatar: {
        public_id: email,
        secure_url:
          "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg",
      },
    });

    if (!user) {
      return next(
        new AppError("User registration failed, please try again", 400)
      );
    }

    user.password = undefined;

    const token = await user.generateJWTToken();

    res.cookie("token", token, cookieOptions);

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
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("All fields are required", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new AppError("Email or password does not match", 400));
    }

    const token = await user.generateJWTToken();
    user.password = undefined;

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const logout = (req, res) => {
  res.cookie("token", null, {
    secure: true,
    maxAge: 0,
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
};

const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    res.status(200).json({
      success: true,
      message: "user details",
      user,
    });
  } catch (error) {
    return next(new AppError("Failed to fetch profile detail", 500));
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new AppError("Email is required", 400));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(new AppError("Email is not registered", 400));
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
  forgotPassword,
  resetPassword,
  changePassword,
  updateUser,
};
