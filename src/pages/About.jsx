import React from "react";
import image1 from "../assets/about-1.jpg";
import image2 from "../assets/team-1.jpg";
import image3 from "../assets/team-2.jpg";
import image4 from "../assets/team-3.jpg";
import image5 from "../assets/team-4.jpg";
import image6 from "../assets/about-2.jpg";
import image7 from "../assets/avatar-2.jpg";
import { CiDeliveryTruck } from "react-icons/ci";


const About = () => {
  return (
    <div className=" p-10">
      <div className="relative rounded-2xl overflow-hidden">
        <img src={image1} alt="" className="rounded-xl h-[600px] w-[1800px]" />
        <div className="top-0  w-full h-full  bg-black/80  flex flex-col items-center justify-center absolute">
          <div className="text-white text-2xl">Start from since 1990</div>
          <div className="text-white font-black text-5xl text-center mt-3">
            We Help Everyone
            <br />
            Enjoy Amazing Products
          </div>
          <div className="flex gap-10 py-10 pt-32">
            <div className="text-white text-4xl font-bold">
              <div className="text-[80px]"> 6m+</div>
              <br />
              <p className=""> Happy Clients</p>
            </div>
            <div className="text-white text-4xl font-bold">
              <div className="text-[80px]"> 8m+</div>
              <br />
              <div className=""> Great Products</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 p-10 gap-10">
        <div className="">
          <div className="text-black text-3xl font-semibold">Who We Are</div>
          <div className="text-gray-600 py-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium mollis ex, vel interdum augue faucibus sit amet. Proin
            tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu
            finibus nunc ullamcorper et
          </div>
        </div>
        <div>
          <div className="text-black text-3xl font-semibold">Our History</div>
          <div className="text-gray-600 py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium mollis ex, vel interdum augue faucibus sit amet. Proin
            tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu
            finibus nunc ullamcorper et.
          </div>
        </div>
        <div>
          <div className="text-black text-3xl font-semibold">Our Mission</div>
          <div className="text-gray-600 py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium mollis ex, vel interdum augue faucibus sit amet. Proin
            tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu
            finibus nunc ullamcorper et.
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-black text-3xl font-semibold px-5 p-5">
          Our Team
        </div>
        <hr />

        <div className="grid grid-cols-4 py-12 gap-5 px-10">
          <div className="">
            <img src={image2} alt="" className="rounded-xl " />
            <div className="py-5">
              <p className="text-black text-2xl flex justify-center">
                John Hossain
              </p>
              <p className="text-gray-600 flex justify-center font-bold">
                CEO & Founder
              </p>
            </div>
          </div>
          <div>
            <img src={image3} alt="" className="rounded-xl " />
            <div className="py-5">
              <div className="text-black text-2xl flex justify-center">
                Jane Cooper
              </div>
              <div className="text-gray-600 flex justify-center font-bold">
                Market Development
              </div>
            </div>
          </div>
          <div>
            <img src={image4} alt="" className="rounded-xl " />
            <div className="py-5">
              <div className="text-black text-2xl flex justify-center">
                Kristin Watson
              </div>
              <div className="text-gray-600 flex justify-center font-bold">
                Head Engineer
              </div>
            </div>
          </div>
          <div>
            <img src={image5} alt="" className="rounded-xl " />
            <div className="p-5">
              <div className="text-black text-2xl flex justify-center font-bold">
                Isabella
              </div>
              <div className="text-gray-600 flex justify-center font-bold">
                Marketing
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end p-10">
        <img
          src={image6}
          alt=""
          className="rounded-xl flex items-end w-[700px] h-[450px]"
        />
      </div>
      <div className="mt-[-450px] p-10">
        <div className="text-black">OUR PERFORMANCE</div>
        <div className="text-black  font-semibold py-5 text-6xl ">
          We Believe In
          <br className="" />
          <p>Quality Products</p>
        </div>
        <div className="text-gray-500 mr-[920px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor
          purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc
          ullamcorper et.
        </div>
      </div>

      <div className="p-5 py-16">
        <div className="p-28 bg-blue-100 w-[1400px] h-[300px] mt-24 rounded-lg ">
          <img
            src={image7}
            alt=""
            className="rounded-full flex items-center w-[100px] h-[100px] ml-[550px] mt-[-70px] "
          />
        </div>
        <div className="px-28 mt-[-120px]">
          <div className="text-black font-semibold mr-[100px] ml-[83px] text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            doloribus fugit nam
            <p className="ml-[140px]">
              suscipit illum praesentium nihil consequatur! Non autem, maiores.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 py-10 gap-16 ml-32">
        <div className="">
          <div className="">
            <CiDeliveryTruck/>
          </div>
          <p className="text-black font-bold">Free Delivery</p>
          <p className="text-black">Free shipping on all order</p>
        </div>
        <div>
          <p className="text-black font-bold">Returns</p>
          <p className="text-black">Back guarantee under 7 days</p>
        </div>
        <div>
          <p className="text-black font-bold">Support 24/7</p>
          <p className="text-black">Support online 24 hours a day</p>
        </div>
        <div>
          <p className="text-black font-bold">payments</p>
          <p className="text-black">100% payment security</p>
        </div>
      </div>
    </div>
  );
};

export default About;
