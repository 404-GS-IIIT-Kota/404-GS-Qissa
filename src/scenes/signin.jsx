import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaUser, FaLock } from 'react-icons/fa';
import placeholderImage from '../../public/sign-up-image-1.jpg';

const Signup = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="w-80 h-80 bg-white mx-auto flex flex-col lg:flex-row" style={{ width: '85%', height: '85%' }}>
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center">
          <img src={placeholderImage} alt="Placeholder" className="w-full h-full object-cover" style={{ width: '75%', height: '75%' }} />
          <a href="#" className="text-gray-700 underline mt-4">Create a new account</a>
        </div>

        {/* Right Section - Signup Form */}
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-4 text-center">Sign In</h2>
          <br />
          <br />
          <form className="w-2/3 mx-auto"> {/* Centered the form elements */}
            <div className="mb-8 flex items-center">
              <FaUser className="text-black-800 mr-2" />
              <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-8 flex items-center">
              <FaLock className="text-black-800 mr-2" />
              <input type="password" id="password" name="password" placeholder='Password' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700">Remember Me</span>
                <br />
              </label>
            </div>

            <button type="submit" className="w-2/5 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mx-auto">Log In</button>
          </form>
          <br />
          <br />
          <div className="mt-4 flex items-center justify-center">
            <span className="text-gray-700 text-sm">Or login with </span>
            <FaFacebook className="text-blue-600 ml-2 cursor-pointer" />
            <FaTwitter className="text-blue-400 ml-2 cursor-pointer" />
            <FaGoogle className="text-red-500 ml-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
