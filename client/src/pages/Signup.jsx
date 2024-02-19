import SignUpImage from "../assets/sign-up-page.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [post, setPost] = useState({
    Fname: "",
    Lname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="sm:h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500">
      <div
        className="w-80  max-sm:my-5 h-80 bg-white mx-auto flex flex-col lg:flex-row rounded-2xl shadow-2xl max-lg:max-h-max"
        style={{ width: "85%", height: "85%" }}
      >
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center">
          <img
            src={SignUpImage}
            alt="Placeholder"
            className="w-full h-full object-cover"
            style={{ width: "90%", height: "90%" }}
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-4 max-sm:text-center">
            Sign Up
          </h2>
          <br />
          <form className="w-full md:w-full">
            <div className="mb-8 flex items-center max-sm:flex-col gap-7">
              <input
                type="text"
                id="Fname"
                name="Fname"
                placeholder="First Name"
                value={post.Fname}
                onChange={handleInput}
                className="w-2/5 px-4 py-2 max-sm:w-full  border rounded-md focus:outline-none focus:border-blue-500 border-gray-300 "
              />
              <input
                type="text"
                id="Lname"
                name="Lname"
                placeholder="Last Name"
                value={post.Lname}
                onChange={handleInput}
                className="w-2/5 max-sm:w-full px-4 py-2 ml-5 border max-sm:ml-0 rounded-md focus:outline-none focus:border-blue-500 border-gray-300"
              />
            </div>
            <div className="mb-8 flex items-center max-sm:flex-col  gap-7">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={post.username}
                onChange={handleInput}
                className="w-2/5 px-4 py-2 max-sm:w-full border rounded-md focus:outline-none focus:border-blue-500 border-gray-300"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Mail"
                value={post.email}
                onChange={handleInput}
                className="w-2/5 px-4 py-2 max-sm:w-full max-sm:ml-0 border rounded-md focus:outline-none focus:border-blue-500 border-gray-300 ml-5"
              />
            </div>

            <div className="mb-8 flex items-center">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={post.password}
                onChange={handleInput}
                className="w-3/5 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 max-sm:w-full border-gray-300"
              />
            </div>
            <div className="mb-8 flex items-center">
              <input
                type="password"
                id="Cpassword"
                name="Cpassword"
                placeholder="Confirm Password"
                className="w-3/5 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 max-sm:w-full border-gray-300"
              />
            </div>
            <Link to="/signup-2">
              <button
                type="submit"
                className="w-2/5 bg-blue-500 text-white py-2 rounded-md max-sm:w-full hover:bg-blue-600 flex max-sm:items-center justify-center"
              >
                Next
              </button>
            </Link>
          </form>
          <div className="mt-4 flex">
            <p className="text-gray-700 inline-block">
              Already have an account?{" "}
            </p>
            <a
              href="/"
              className="text-gray-700 hover:underline ml-2 inline-block"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;