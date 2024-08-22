import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center p-11">
      <div className="text-black text-5xl font-bold">404</div>
      <div className="text-black p-4 font-bold">
        The page you're looking for doesn't exist or probably moved somewhere...
        <p className="text-black px-36 p-2">probably moved somewhere...</p>
      </div>
      <div className="text-gray-700">Please back to homepage or check our offer</div>
      <button className="border-2  px-8 p-2 text-white bg-blue-800 mt-10 rounded-lg hover:bg-white hover:text-blue-800 hover:border-blue-800">
      <a href="">BACK TO HOMEPAGE</a>
      </button>
    </div>
  );
};

export default Error;