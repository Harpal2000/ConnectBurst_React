import React, { useState } from "react";
import logoText from "../assets/images/logoText.svg";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";

const Header = () => {

  return (
    <>
      <div className="bg-[#040404] w-[98%] h-4 fixed top-0 z-30"></div>
      <div className="w-[98%] fixed z-40 top-4 left-4 right-3 bg-[#242424] rounded-[20px] text-[#CACACA] p-5 flex flex-col md:flex-row items-center justify-between font-poppins">
        <div className="main_logo mb-4 md:mb-0 flex w-[7.5rem] h-14">
          <img src={logo} alt="logo" />
        </div>

        <div className="signUp_btn">
          <Link to="/signUp" className="w-full">
            <button className="btn text-[#242424] border-none p-2 text-center w-full font-semibold bg-white rounded-md hover:shadow-sm hover:shadow-white">
              SignUp
            </button>
          </Link>
        </div>
        {/* <div
          className={`searchBar relative ${
            isFocused ? "border-[#3a3a3a7c]" : "border-[#3a3a3a7c]"
          }`}
        >
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg md:text-xl" />
          <input
            type="text"
            className="search_users w-full h-11 rounded-lg pl-10 pr-4 md:w-80 bg-[#3a3a3a7c] border-none outline-none"
            placeholder="Search..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div> */}
      </div>
    </>
  );
};

export default Header;
