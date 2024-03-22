import React from "react";
import googleIcon from "../assets/images/googleIcon.svg";
import logo from "../assets/images/splashLogo.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <section className="w-full h-screen flex items-center justify-center">
        <div className="container h-full px-6 py-5 lg:w-10/12 ">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
           <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <div className="flex flex-col justify-center items-start">
                <div className="flex">
                 <div className="flex flex-col lg:gap-20  items-center lg:items-start lg:justify-start">
                  <Link to="/">
                     <img
                    src={logo}
                    alt="Company Logo"
                    className="w-52 h-52 mb-4"
                  />
                  </Link>
                  <p className="text-center lg:text-left lg:pl-10 text-2xl text-white leading-[1.5]">
                    <span className="text-4xl font-semibold text-[#29AAEB]">LogIn Now </span><br /> Start your journey with <span className="text-[#29AAEB]">Connect Burst</span><br /> to make connections with world
                    <br />
                  </p>
                 </div>
                </div>
              </div>
            </div>


            <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
              <form className="">
                <div className="bg-black mb-4">
                  <div class="relative bg-inherit">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="peer bg-transparent h-14 w-full rounded-lg text-gray-200 placeholder-transparent ring-1 px-2 ring-[rgb(131,131,131)] focus:ring-[#29AAEB] focus:outline-none focus:border-[#29AAEB]"
                      placeholder="Email"
                    />
                    <label
                      for="email"
                      className="absolute cursor-text left-0 -top-3 text-lg text-gray-400 bg-inherit mx-1 px-2 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3 peer-focus:text-[#29AAEB] peer-focus:text-md transition-all"
                    >
                      Email
                    </label>
                  </div>
                </div>
                
                <div className="bg-black mb-4">
                  <div class="relative bg-inherit">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="peer bg-transparent h-14 w-full rounded-lg text-gray-200 placeholder-transparent ring-1 px-2 ring-[rgb(131,131,131)] focus:ring-[#29AAEB] focus:outline-none focus:border-[#29AAEB]"
                      placeholder="password"
                    />
                    <label
                      for="password"
                      className="absolute cursor-text left-0 -top-3 text-lg text-gray-400 bg-inherit mx-1 px-2 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-3 peer-focus:text-[#29AAEB] peer-focus:text-md transition-all"
                    >
                      Password
                    </label>
                  </div>
                </div>
                <div className="mb-6">
                  <button
                    className="bg-[#29AAEB] hover:bg-blue-500 text-white text-xl py-2 px-4 rounded-xl w-full focus:outline-none focus:shadow-outline h-14"
                    type="button"
                  >
                    Log In
                  </button>
                </div>
                <p className="text-center text-gray-500 text-xs">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-500">
                    Sign Up
                  </Link>
                </p>
                <div className="flex items-center justify-center my-4">
                  <div className="border-b border-gray-300 w-full"></div>
                  <span className="mx-4 text-gray-500">OR</span>
                  <div className="border-b border-gray-300 w-full"></div>
                </div>
                <button
                  className="bg-transparent border border-[#838383] text-white py-2 px-4 rounded-xl flex items-center justify-start w-full focus:outline-none focus:shadow-outline h-14 gap-6"
                  type="button"
                >
                  <img src={googleIcon} alt="googleIcon" className="w-7" />
                  Continue with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
