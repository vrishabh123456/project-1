import React from "react";
import camera1 from "../../assets/camera1.jpg";

const Card3 = () => {
  return (
    <div>
      <div className="relative">
        <img src={camera1} alt="" className="h-[600px] w-full object-cover" />
        <div className="top-0 flex flex-col justify-start mt-44 px-8 absolute">
          <div className="text-yellow-400 ">SUPER DEAL ON</div>
          <h1 className="text-white  text-6xl font-bold">
            Get $50 - $100 Off
            <br />
            When Buying Online.
          </h1>
          <button className="py-3 mt-10 font-bold rounded-md hover:bg-white text-white bg-blue-800 hover:text-blue-800 size-2/4">
            <a href="" className="text-md">
              SHOP NOW
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
