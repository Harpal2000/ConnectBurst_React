import React, { useState } from "react";
import logoText from "../assets/images/logoText.svg";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className="bg-[#040404] w-[98%] h-4 fixed top-0 z-30"></div>
      <div className="w-[98%] fixed z-40 top-4 left-4 right-3 bg-[#242424] rounded-[20px] text-[#CACACA] p-5 flex flex-col md:flex-row items-center justify-between font-poppins">
        <div className="main_logo mb-4 md:mb-0 flex w-[7.5rem] h-14">
          <img src={logo} alt="logo" />
        </div>

        <div className="signUp_btn">
          <Link to="/register" className="w-full">
            <button className="btn text-black border-none p-2 text-center w-full bg-white rounded-md hover:shadow-sm hover:shadow-white">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
