import React from "react";
import googleIcon from "../assets/images/googleIcon.svg";
import logo from "../assets/images/splashLogo.svg";

const SignUp = () => {
  return (
    <div>
      <section className="w-full h-screen flex items-center justify-center">
        <div className="container h-full px-6 py-5 lg:w-10/12 ">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <div className="flex flex-col justify-start items-start">
               <div className="flex items-center justify-start">
                 <img
                  src={logo}
                  alt="Company Logo"
                  className="w-80 h-80 mb-4"
                />
                <p className="text-center font-semibold text-5xl text-white">
                  Register <br/> now to get<br/>   started
                  <br />
                </p>
               </div>
              </div>
            </div>

            <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
              <form className="">
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border border-[rgb(131,131,131)] rounded-xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-transparent text-white h-14"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border border-[#838383] rounded-xl w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline h-14"
                    id="fullname"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border border-[#838383] rounded-xl w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline h-14"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border border-[#838383] rounded-xl w-full py-2 px-3 bg-transparent text-white leading-tight focus:outline-none focus:shadow-outline h-14"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-full focus:outline-none focus:shadow-outline h-14"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="text-center text-gray-500 text-xs">
                  Already have an account?{" "}
                  <a href="#" className="text-blue-500">
                    Sign In
                  </a>
                </p>
                <div className="flex items-center justify-center my-4">
                  <div className="border-b border-gray-300 w-full"></div>
                  <span className="mx-4 text-gray-500">OR</span>
                  <div className="border-b border-gray-300 w-full"></div>
                </div>
                <button
                  className="bg-transparent border border-[#838383] text-white font-semibold py-2 px-4 rounded-xl flex items-center justify-start w-full focus:outline-none focus:shadow-outline h-14 gap-6"
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
