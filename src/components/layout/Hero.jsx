import React from "react";
import image1 from "../../assets/asset 21.jpeg";
import image2 from "../../assets/asset 22.jpeg";

const Hero = () => {
  return (
    <div className="flex justify-center mt-6 gap-5 px-4">
      <div className="relative ml-15">
        <img src={image1} alt="" className="rounded-xl h-[600px]" />
        <div className="top-0  w-full h-full flex flex-col items-center mt-20 absolute">
          <div className="text-sm px-2 rounded-tr-md rounded-b-md text-white bg-red-400">
            WEEKEND DEAL
          </div>
          <div className="text-black font-black text-5xl text-center mt-3">
            Best Offers From
            <br />
            Games And More
          </div>
          <div className="text-black font-bold">
            GREAT SAVINGS & FREE DELIVERY
          </div>
          <button className="px-4 py-[10px] font-bold rounded-md hover:bg-white mt-4  bg-blue-700">
            <a href="" className="text-md">
              SHOP NOW
            </a>
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={image2} alt="" className="rounded-xl h-[600px]" />
        <div className="top-0  w-full h-full flex flex-col items-center mt-20 absolute">
          <div className="text-sm px-2 rounded-tr-md rounded-b-md text-white bg-red-400">
            WEEKEND DEAL
          </div>
          <div className="text-black font-black text-5xl text-center mt-3">
            Best Offers From
            <br />
            Games And More
          </div>
          <div className="text-black font-bold">
            GREAT SAVINGS & FREE DELIVERY
          </div>
          <button className="px-4 py-[10px] font-bold rounded-md hover:bg-white mt-4  bg-blue-700">
            <a href="" className="text-md">
              SHOP NOW
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
