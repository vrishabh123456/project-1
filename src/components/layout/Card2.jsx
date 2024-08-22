import React from "react";
import image1 from "../../assets/logitechKeyboed.jpg";
import image2 from "../../assets/iphone.jpg";

const Card2 = () => {
  return (
    <div className="flex justify-normal mt-6 gap-5 px-4 mr-5 ml-5">
      <div className="relative ml-15">
        <img src={image1} alt="" className="rounded-xl h-[600px] w-[1200px]" />
        <div className="top-0  w-full h-full flex flex-col items-center mt-20 absolute">
          <div className="text-black font-bold">UP TO 15% OFF</div>
          <div className="text-black font-black text-5xl text-center mt-3">
            Discount 15% On
            <br />
            All Electronic
          </div>
          <button className="px-6 py-[10px] font-bold rounded-md hover:bg-white mt-4  bg-blue-800">
            <a href="" className="text-md">
              SHOP NOW
            </a>
          </button>
        </div>
      </div>
      <div className="relative ml-15">
        <img src={image2} alt="" className="rounded-xl h-[600px] w-[500px]" />
        <div className="top-0  w-full h-full flex flex-col items-center mt-20 absolute">
          <div className="text-sm px-2 rounded-tr-md rounded-b-md text-white bg-red-700">
            MONTH DEAL
          </div>
          <div className="text-black font-black text-4xl text-center mt-3">
            Latest special phones
          </div>
          <div className="text-black py-4">SALE ! 20% OFF</div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
