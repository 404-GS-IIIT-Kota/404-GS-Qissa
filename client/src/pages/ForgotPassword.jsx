import React, { useState } from "react";
import Forgot from "../assets/forgot.jpg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic for sending the password recovery link to the email address
    // For now, let's just show the notification
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hides the notification after 3 seconds
  };

  return (
    <div>
      <div className="sm:h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500">
        <div
          className="w-80  max-sm:my-5 h-80 bg-white mx-auto flex flex-col lg:flex-row rounded-2xl shadow-2xl max-lg:max-h-max"
          style={{ width: "85%", height: "85%" }}
        >
          <div className="w-full lg:w-1/2 p-6 flex items-center justify-center">
            <img
              src={Forgot}
              alt="Placeholder-Forgot"
              className="w-full h-full object-cover"
              style={{ width: "90%", height: "90%" }}
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center gap-10 relative">
            <h2 className="text-5xl max-md:text-4xl font-bold max-sm:text-center">
              Reset Password
            </h2>
            <form className="w-full md:w-full" onSubmit={handleSubmit}>
              <div className="mb-8 max-sm:mt-5 flex items-center">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your username"
                  className="w-3/5 max-sm:w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex max-md:flex-col max-md:justify-center max-md:items-center gap-5 w-full">
              <div className="flex flex-col w-2/5 max-md:w-full sm:flex-row items-center">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4 sm:mb-0"
                >
                  Submit
                </button>
              </div>
              <div className="flex flex-col w-2/5 max-md:w-full sm:w-2/5 sm:flex-row items-center"> <Link className="w-full" to="/signin"><button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mb-4 sm:mb-0"
                >
                  Back to Signin
                </button></Link></div>
              </div>
            </form>
            {showNotification && (
              <p className="text-green-500 absolute md:bottom-24 max-sm:bottom-[15rem]">
                Password recovery link sent to your email
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
