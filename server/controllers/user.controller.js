import AppError from "../utils/error.util.js";
import { User} from "../models/user.model.js";
import cloudinary from "cloudinary";
import sendEmail from "../utils/sendEmail.js";
import bcrypt from "bcrypt";

const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
  httpOnly: true,
  secure: true,
};

const register = async (req, res, next) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmpassword,
    country,
    birthday,
    gender,
    pronoun,
    bio,
  } = req.body;
  console.log(req.body);

  const userExists = await User.findOne({ email });
  const hashedPassword = await bcrypt.hash(password, 10);

  if (userExists) {
    return next(new AppError("Email already exists", 400));
  }

  const user = await User.create({
    firstName,
    lastName,
    userName,
    email,
    password: hashedPassword,
    confirmpassword,
    country,
    birthday,
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

  // TODO: File upload

  if (req.file) {
    try {
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
        FileSystem.rm(`uploads/${req.file.filename}`);
      }
    } catch (e) {
      return next(
        new AppError(error || "File is not uploaded , Please try again", 500)
      );
    }
  }

  await user.save();
  // res.redirect("/signup-2?username=" + encodeURIComponent(username));

  user.password = undefined;

  const token = await user.generateJWTToken();

  res.cookie("token ", token, cookieOptions);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
};

// const register2 = async(req,res,next) => {
//     const {country, birthday , gender, pronoun, bio} = req.body;

//     if(!country || !birthday || !gender || !pronoun || !bio){
//         return next(new AppError('All fields are required' , 400));
//     }

//     const user = await User.create({
//         country,
//         birthday,
//         gender,
//         pronoun,
//         bio,
//         avatar: {
//             public_id: email,
//             secure_url:
//               'https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg',
//           },
//     });

//     if(req.file){
//         try{
//             const result = await cloudinary.v2.uploader.upload(req.file.path,{
//                 folder: 'qissaBackend',
//                 width:250,
//                 height:250,
//                 gravity:'faces',
//                 crop:'fill'
//             });

//             if(result){
//                 user.avatar.public_id = result.public_id;
//                 user.avatar.secure_url = result.secure_url;

//                 // Remove file from server
//                 FileSystem.rm(`uploads/${req.file.filename}`)
//             }
//         }catch(e){
//             return next(
//                 new AppError(error || 'File is not uploaded , Please try again' , 500)
//             )
//         }
//     }

//     if(!user){
//         return next(new AppError('User registration failed, please try again', 400))
//     }

//     await user.save();
//     const token = await user.generateJWTToken();

//     res.cookie('token ', token , cookieOptions)

//     res.status(201).json({
//         success: true,
//         message: 'User registered successfully',
//         user,
//     })
// }

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("All fields are required", 400));
    }

    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new AppError("Email or password does not match", 400));
    }

    const token = await user.generateJWTToken();
    user.password = undefined;

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "User loggedin successfully",
      user,
    });
  } catch (e) {
    return next(new AppError(e.message, 500));
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
  } catch (e) {
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
    return next(new AppError("Email is registered ", 400));
  }

  const resetToken = await user.generatePasswordResetToken();

  await user.save();

  const resetPasswordURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  const subject = "Reset Password";
  const message = `You can reset your password by clicking <a href=${resetPasswordUrl} target="_blank">Reset your password</a>\nIf the above link does not work for some reason then copy paste this link in new tab ${resetPasswordUrl}.\n If you have not requested this, kindly ignore.`;

  try {
    await sendEmail(email, subject, message);

    res.status(200).json({
      success: true,
      message: `Reset password token has been sent to ${email} successfully`,
    });
  } catch (e) {
    user.forgotPasswordExpiry = undefined;
    user.forgotPasswordToken = undefined;

    await user.save();
    return next(new AppError(e.message, 500));
  }
};

const resetPassword = async (req, res) => {
  const { resetToken } = req.params;

  const { password } = req.body;

  const forgotPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const user = await User.findOne({
    forgotPasswordToken,
    forgotPasswordExpiry: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new AppError("Token is invalid or expired, please try again", 400)
    );
  }

  user.password = password;
  user.forgotPasswordToken = undefined;
  user.forgotPasswordExpiry = undefined;

  user.save();

  res.status(200).json({
    success: true,
    message: "Password changed successfully!",
  });
};

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { id } = req.user;

  if (!oldPassword || !newPassword) {
    return next(new AppError("All fields are mandatory", 400));
  }

  const user = await User.findById(id).select("+password");

  if (!user) {
    return next(new AppError("User doesnt exist", 400));
  }

  const isPasswordValid = await user.comparePassword(oldPassword);

  if (!isPasswordValid) {
    return next(new AppError("Invalid old password", 400));
  }

  user.password = newPassword;

  await user.save();

  user.password = undefined;

  res.status(200).json({
    success: true,
    message: "Password changed successfully!",
  });
};

const updateUser = async () => {
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { userName } = req.body;
  const { id } = req.user.id;

  const user = await User.findById(id);

  if (!user) {
    return next(new AppError("User does not exist", 400));
  }

  if (req.firstName) {
    user.firstName = firstName;
  }

  if (req.lastName) {
    user.lastName = lastName;
  }

  if (req.userName) {
    user.userName = userName;
  }

  if (req.file) {
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    try {
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
        FileSystem.rm(`uploads/${req.file.filename}`);
      }
    } catch (e) {
      return next(
        new AppError(error || "File is not uploaded , Please try again", 500)
      );
    }
  }

  await user.save();

  res.status(200).json({
    success: true,
    message: "update profile successfully",
  });
};

export {
  register,
  // register2,
  login,
  logout,
  getProfile,
  forgotPassword,
  resetPassword,
  changePassword,
  updateUser,
};
