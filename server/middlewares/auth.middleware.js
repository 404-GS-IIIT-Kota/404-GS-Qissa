import jwt from "jsonwebtoken";
import AppError from "../utils/error.util.js";

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // this we will set accordingly ha but  se headers me he aayegi cookies you can access it directly
    //dekh lena jo bhi jaise vha bhejoge vaise yha access kr lena fir jo krna ho kr lena
    //ok boss, thank youu very muchh, bye enjoy coding and add members :v

    if (!token) {
      throw new AppError("Unauthenticated, please login again", 401);
    }

    const userDetails = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = userDetails;

    next();
  } catch (error) {
    return next(new AppError("Unauthorized", 401));
  }
};

export { isLoggedIn };
