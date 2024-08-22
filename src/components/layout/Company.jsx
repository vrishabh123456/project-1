import React from "react";

import images1 from "../../assets/asset 5.png";
import images2 from "../../assets/asset 6.png";
import images3 from "../../assets/asset 7.png";
import images4 from "../../assets/asset 8.png";
import images5 from "../../assets/asset 9.png";
import images6 from "../../assets/asset 10.png";
import images7 from "../../assets/asset 11.png";
import images8 from "../../assets/asset 12.png";
import images9 from "../../assets/asset 13.png";
import images10 from "../../assets/asset 14.png";
import images11 from "../../assets/asset 15.png";
import images12 from "../../assets/asset 16.png";

const Company = () => {
  return (
    <div className="grid lg:grid-cols-6 md:max-lg:grid-cols-4 max-md:grid-cols-2 px-12 my-8">
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images1} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images2} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images3} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images4} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images5} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images6} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images7} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images8} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images9} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <img src={images10} alt="" />
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <a href="">
          <img src={images11} alt="" />
        </a>
      </div>
      <div className="border opacity-35 hover:opacity-100 border-black/20 h-full w-full flex justify-center items-center px-4 py-4">
        <a href="/">
          <img src={images12} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Company;
