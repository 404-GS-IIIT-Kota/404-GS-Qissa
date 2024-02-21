import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddBlog from "../component/AddBlog";
import AddBlogWidget from "../component/AddBlogWidget";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Modal = ({ closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div
      ref={modalRef}
      className="absolute top-[2rem] h-[10rem] w-[12rem] left-0 bg-white rounded-2xl mt-2 p-4 shadow-2xl flex flex-col justify-around items-center"
    >
      <Link to="/beautiful-experiences" className="block mb-2">
        Beautiful Experiences
      </Link>
      <Link to="/coming-out-stories" className="block mb-2">
        Coming Out Stories
      </Link>
      <Link to="/legal-advocacy-hub" className="block mb-2">
        Legal Advocacy Hub
      </Link>
    </div>
  );
};

const LegalAdvocacyHub = () => {
  const [isopen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="h-screen bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 relative">
        <div className="w-11/12 h-16 bg-white rounded-2xl shadow-lg max-auto absolute top-4 left-[1rem] md:left-10 xl:left-16 z-20">
          <div className="relative top-4 max-w-900 flex justify-between items-center pr-16">
            <h1 className="font-bold text-xl hover:cursor-pointer relative left-4">
              <Link to="/beautiful-experiences">Qissaa</Link>
            </h1>
            <ul className="flex items-center gap-16 max-sm:hidden">
              <li className="hover:cursor-pointer">
                <Link to="/notifications">Notifications</Link>
              </li>
              <li
                onClick={toggleModal}
                className="hover:cursor-pointer relative"
              >
                Channels <ArrowDropDownIcon />
                {modalOpen && <Modal closeModal={closeModal} />}
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
        <div className="h-100 z-10 w-11/12 bg-white rounded-2xl shadow-2xl absolute top-24 left-[1rem] md:left-10 xl:left-16 justify-center overflow-scroll no-scrollbar p-10">
          <AddBlogWidget />
          <AddBlog />
        </div>{" "}
      </div>
    </>
  );
};

export default LegalAdvocacyHub;
