import React from 'react'
import { Link } from "react-router-dom";

const Notifications = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500">
          <div className="w-11/12 h-16 bg-white rounded-2xl shadow-2xl max-auto absolute max-sm:top-4 max-sm:left-6 sm:top-4 sm:left-8 md:top-4 md:left-10 lg:top-4 lg:left-12 xl:top-4 xl:left-16">
        <div className="relative top-4 max-w-900 flex justify-between pr-16 ">
          <h1 className="font-bold text-xl hover:cursor-pointer relative left-4"><Link to="/main">Qissa.</Link></h1>
              <ul className="flex items-center gap-16">
                <li className="hover:cursor-pointer">
                  <Link to="/notifications">Notifications</Link>
                </li>
                <li className="hover:cursor-pointer">Channels</li>
                <li className="hover:cursor-pointer">
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-100  w-9/12 bg-white rounded-2xl shadow-2xl absolute top-24 left-80"></div>
          <div className="h-100  w-60 bg-white rounded-2xl shadow-2xl absolute top-24 left-16">
            <div className="rounded-full h-20 w-20 bg-red-500 relative top-5 left-5"></div>
            <div className="h-5 w-4/5 relative top-20 left-5 bg-gray-400 mb-2"></div>
            <div className="h-5 w-4/5 relative top-20 left-5 bg-gray-400 mb-2"></div>
            <div className="h-5 w-4/5 relative top-20 left-5 bg-gray-400 mb-2"></div>
            <div className="h-5 w-4/5 relative top-20 left-5 bg-gray-400 mb-2"></div>
            <div className="h-5 w-4/5 relative top-20 left-5 bg-gray-400 mb-2"></div>
            <div className="h-5 w-4/5 relative top-40 left-5 bg-gray-400 mb-2"></div>
            <div className="h-5 w-4/5 relative top-40 left-5 bg-gray-400 mb-2"></div>
            <div className="h-5 w-4/5 relative top-40 left-5 bg-gray-400 mb-2"></div>
            <div className="h-5 w-4/5 relative top-40 left-5 bg-gray-400 mb-2"></div>
            <div className="h-5 w-4/5 relative top-40 left-5 bg-gray-400 mb-2"></div>
          </div>
        </div>
      );
}

export default Notifications
