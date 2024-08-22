import React from "react";

const RegisterPage = () => {
  return (
    <div className="py-16 flex justify-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
        <div className="bg-white p-10 shadow-lg rounded-lg">
          <p className="text-3xl font-bold mb-6 text-black">Login</p>
          <form>
            <div className="py-5">
              <label htmlFor="login-email" className="block text-black">
                Username or email address{" "}
                <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id=""
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="py-3 relative">
              <label className="text-black">
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                id=""
                className="mt-1 w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex items-center py-3">
              <button
                className="py-2 rounded hover:bg-white hover:border font-semibold px-14 hover:border-blue-800 hover:text-blue-800 bg-blue-600 text-gray-50  "
              >
                LOG IN
              </button>
              <div className="flex items-center px-10">
                <input type="checkbox" id="" className="mr-2" />
                <label htmlFor="" className="text-gray-600">
                  Remember Me
                </label>
              </div>
            </div>
            <a href="#" className="text-black">
              Lost your password?
            </a>
          </form>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <p className="text-3xl font-bold py-6">Register</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">
                Username <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id=""
                className="mt-1 w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Email address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id=""
                className="mt-1 w-full p-2 border border-gray-300"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                id=""
                className="py-2 w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              className="py-2 rounded hover:bg-white hover:border font-semibold px-14 hover:border-blue-800 hover:text-blue-800 bg-blue-600 text-gray-50"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
