import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Coding from "../assets/codingdp.png"
import { useState } from "react";

const Profile = () => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-screen bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 relative">
        <div className="w-11/12 h-16 bg-white rounded-2xl shadow-lg max-auto absolute top-4 left-[1rem] md:left-10 xl:left-16 z-20">
          <div className="relative top-4 max-w-900 flex justify-between items-center pr-16">
            <h1 className="font-bold text-xl hover:cursor-pointer relative left-4 text-gray-800">
              <Link to="/main">Qissaa</Link>
            </h1>
            <ul className="flex items-center gap-16 max-sm:hidden">
              <li className="hover:cursor-pointer">
                <Link to="/notifications" className="text-gray-800">
                  Notifications
                </Link>
              </li>
              <li className="hover:cursor-pointer">
                Channels <ArrowDropDownIcon />
              </li>
              <li className="hover:cursor-pointer ">
                <Link to="/profile" className="text-gray-800">
                  Profile
                </Link>
              </li>
            </ul>

            <button
              onClick={() => setIsOpen(!isopen)}
              className="translate-x-10 hidden max-sm:block"
            >
              {isopen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          {isopen && (
            <div className="bg-[#e1e1e1] shadow-xl h-[150px] w-[150px] translate-x-[11.3rem] rounded-2xl p-4 z-30 translate-y-10">
              <ul className="h-full flex flex-col gap-5 ">
                <li className="hover:cursor-pointer">
                  <Link to="/notifications" className="text-gray-800">
                    Notifications
                  </Link>
                </li>
                <li className="hover:cursor-pointer">
                  Channels <ArrowDropDownIcon />
                </li>
                <li className="hover:cursor-pointer ">
                  <Link to="/profile" className="text-gray-800">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="h-100 w-11/12 max-sm:w-11/12 rounded-2xl shadow-2xl absolute top-24 left-[1rem] md:left-10 xl:left-16 z-20">
          <div className="relative w-[85%] h-[65%] bg-white rounded-tl-2xl md:flex md:flex-col">
            <div className="absolute top-[27px] right-0 h-80 w-full flex flex-col items-start justify-center p-[2rem] gap-1">
              <h1 className="text-gray-800 text-[5rem] font-semibold">
                Aaryan Singh / <span className="text-[3rem] text-gray-600">@aaryan9</span>
              </h1>
              <h2 className="text-gray-600 text-3xl">He/Him</h2>
              <h2 className="text-gray-600 text-3xl">Location: India</h2>
              <h2 className="text-gray-600 text-3xl">Age: 19</h2>
            </div>
            <div className="absolute top-[27px] -right-48 h-80 w-96 border border-double border-black flex items-center justify-center">
              {/* Content of the 80x96 box */}
              <div className="absolute h-72 w-72 bg-gray-500 z-10">
                <img src={Coding} />
              </div>
            </div>
          </div>
          <div className="w-[15%] h-[100%] rounded-tr-2xl rounded-br-2xl bg-red-300 absolute top-0 right-0"></div>
          <div className="w-[85%] h-[35%] bg-white rounded-bl-2xl flex justify-around items-center">
            <div className="w-40 h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-40 h-40 bg-gray-300 rounded-lg"></div>
            <div className="w-40 h-40 bg-gray-300 rounded-lg"></div>
            {/* <div className="w-40 h-40 bg-gray-300 rounded-lg"></div> */}
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Profile;
