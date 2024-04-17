import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import placeholderImage from "../assets/sign-up-image-1.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [signin, setSignin] = useState({
    userName: "",
    password: "",
  });

  const handleInput = (e) => {
    setSignin({ ...signin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, password } = signin;

    try {
      const response = await axios.post(
        "http://localhost:6004/api/v1/user/login",
        {
          userName,
          password,
        }
      );
      console.log(response.data);
      if (response.data.message == "User logged in successfully") {
        // const user = response.user;
        localStorage.setItem("cookies", response.data.cookies);
        console.log(response.data.cookies);
        // redirect ka callback yha handle kr lena
      }
    } catch (e) {
      console.log(e);
    }
    setSignin({
      userName: "",
      password: "",
    });

    console.log(signin);
  };

  return (
    <div className="h-screen max-sm:w-full flex items-center justify-center bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500">
      <div
        className="w-100   max-sm:my-5 h-80 bg-white mx-auto flex flex-col lg:flex-row rounded-2xl shadow-2xl max-lg:max-h-max"
        style={{ width: "85%", height: "85%" }}
      >
        <div className="w-full   lg:w-1/2 p-6 flex flex-col items-center justify-center">
          <div className="max-sm:w-[200px] max-sm:h-[200px] w-[70%] h-[70%]">
            <img
              src={placeholderImage}
              alt="Placeholder"
              className="w-full h-full rounded-xl"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <Link to="/signup" className="text-gray-700 hover:underline mt-4">
            Create a new account
          </Link>
        </div>

        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-4 max-sm:text-center">
            Sign In
          </h2>
          <br />
          <br />
          <form className="w-full md:w-full" onSubmit={handleSubmit}>
            <div className="mb-8 max-sm:mt-5 flex items-center">
              <PersonIcon className="text-black-800 mr-2" />
              <input
                type="text"
                id="userName"
                name="userName"
                value={signin.userName}
                onChange={handleInput}
                placeholder="Username"
                className="w-3/5 max-sm:w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-8 flex items-center">
              <LockIcon className="text-black-800 mr-2" />
              <input
                type="password"
                id="password"
                name="password"
                value={signin.password}
                onChange={handleInput}
                placeholder="Password"
                className="w-3/5 px-4 max-sm:w-full py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center">
              <button
                type="submit"
                className="w-full sm:w-2/5 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4 sm:mb-0"
              >
                Log In
              </button>
              <Link
                to="/forgot-password"
                className="text-gray-700 sm:ml-10 text-sm hover:underline"
              >
                Forgot Password
              </Link>
            </div>
          </form>
          <br />
          <div className="mt-4 flex items-center max-sm:justify-center">
            <span className="text-gray-700 text-sm">Or login with </span>
            <FacebookIcon className="text-blue-600 ml-2 cursor-pointer" />
            <TwitterIcon className="text-blue-400 ml-2 cursor-pointer" />
            <GoogleIcon className="text-red-500 ml-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
