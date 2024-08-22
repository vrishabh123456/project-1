import React from "react";
import watch from "../../assets/watchBanner.jpg";
import { Truck } from "lucide-react";
import { CircleDollarSign } from 'lucide-react';
import { Headset } from 'lucide-react';
import { CreditCard } from 'lucide-react';


const Card4 = () => {
  return (
    <div className="p-10">
      <div className="relative rounded-md overflow-hidden">
        <img src={watch} alt="" className="h-[200px]" />
        <div className="absolute top-0 p-24">
          <div className="text-white text-2xl px-[230px] font-semibold">
            Free Shipping On Order Over $500 - Using code: Freeship
          </div>
          <p className="absolute border-2 top-14 left-[110px] w-[93%] h-24 border-dashed border-white rounded-lg"></p>
        </div>
      </div>

      <div className="grid grid-cols-4 p-12">
        <div className="">
          <div className="flex gap-20">
            <div className="flex items-start">
            <Truck className="size-10 mt-7 ml-10 text-blue-800 "/>
              <div className="px-3 text-center py-7 flex flex-col items-start">
                <div className="text-base text-black font-semibold ">
                  FREE DELIVERY
                </div>
                <p className="text-sm text-black">Free Shiping on all order</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start">
        <CircleDollarSign  className="size-10 mt-7 ml-10 text-blue-800"/>
          <div className="px-4 text-center py-7 flex flex-col items-start">
            <p className="text-base text-black font-semibold ">RETURNS</p>
            <p className="text-sm text-black">Back guaranted under 7 days</p>
          </div>
        </div>
        <div className="flex items-start">
        <Headset  className="size-10 mt-7 ml-11 text-blue-800"/>
          <div className="px-4 text-center py-7 flex flex-col items-start">
            <p className="text-base text-black font-semibold ">Support 24/7</p>
            <p className="text-sm text-black">Support online 24 hours a day</p>
          </div>
        </div>
        <div className="flex items-start">
        <CreditCard  className="size-10 mt-7 ml-14 text-blue-800"/>
          <div className="px-4 text-center py-7 flex flex-col items-start">
            <p className="text-base text-black font-semibold ">Payments</p>
            <p className="text-sm text-black">100% payment security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
