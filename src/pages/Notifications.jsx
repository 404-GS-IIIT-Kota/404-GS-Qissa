import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const Notifications = () => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-screen bg-gradien-to-r from-pink-500 via-orange-400 to-yellow-500  relative">
        {" "}
        {/* Added relative positioning */}
        <div className="w-11/12 h-16 bg-white rounded-2xl shadow-lg max-auto absolute top-4 left-[1rem] md:left-10 xl:left-16 z-20">
          {" "}
          {/* Increased z-index */}
          <div className="relative top-4 max-w-900 flex justify-between items-center pr-16">
            <h1 className="font-bold text-xl hover:cursor-pointer relative left-4">
              <Link to="/main">Qissaa</Link>
            </h1>
            <ul className="flex items-center gap-16 max-sm:hidden">
              <li className="hover:cursor-pointer">
                <Link to="/notifications">Notifications</Link>
              </li>
              <li className="hover:cursor-pointer">
                Channels <ArrowDropDownIcon />
              </li>
              <li className="hover:cursor-pointer ">
                <Link to="/profile">Profile</Link>
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
            <div className="bg-[#e1e1e1]  shadow-xl h-[150px] w-[150px] translate-x-[11.3rem] rounded-2xl p-4 z-30 translate-y-10">
              <ul className="h-full flex flex-col gap-5 ">
                <li className="hover:cursor-pointer">
                  <Link to="/notifications">Notifications</Link>
                </li>
                <li className="hover:cursor-pointer">
                  Channels <ArrowDropDownIcon />
                </li>
                <li className="hover:cursor-pointer ">
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="h-100 z-10 w-11/12 bg-white rounded-2xl shadow-2xl absolute top-24 left-[1rem] md:left-10 xl:left-16 flex justify-center items-center">
            <div className="w-[80%] h-[100%] border border-black p-5 overflow-auto">
              <div className="w-[100%] h-[8rem] border border-black p-5 p-5 mt-3 mb-3">
                <h1>Notification!!</h1>
              </div>
            </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Notifications;
