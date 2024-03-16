import React from "react";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        <div
          className="lg:w-1/2 bg-cover"
          style={{
            backgroundImage: `url('https://source.unsplash.com/random')`,
          }}
        >
        </div>
        <div className="lg:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="mobileNumberOrEmail"
                className="block text-gray-700 font-bold mb-2"
              >
                Mobile number or Email address
              </label>
              <input
                type="text"
                id="mobileNumberOrEmail"
                placeholder="Enter mobile number or email"
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-bold mb-2"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter a username"
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter a password"
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
