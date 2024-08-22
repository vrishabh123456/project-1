import React from "react";
import Newproduct from "../common/Newproduct";

const Products = () => {
  return (
    <div>
      <div className="p-10">
        <h2 className="mt-3 text-3xl flex ">Trending Products</h2>
      </div>
      <hr className="mr-[1000px] ml-[40px]" />
      <div className="grid grid-cols-3 gap-4 p-5 ">
        <div className="flex flex-col ">
          <Newproduct
            imageUrl="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/01.jpg"
            title="Laptops"
            description="MacBook Pro 13.3″ 16GB/512GB Silver"
            price="$1,527.00"
          />
          <Newproduct
            imageUrl="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/111.jpg"
            className=""
            title="Apple AirPods"
            description="Apple iPhone 11 Pro Max Triple Camera"
            price="$425.00-$609.00"
          />
        </div>
        <div className="flex flex-col">
          <header>
            <h2 className="text-black mt-[-100px] text-3xl flex ">
              New Products
            </h2>
          </header>
          <hr className="mt-[-38px] mr-5" />
          <Newproduct
            imageUrl="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/01.jpg"
            title="Laptops"
            description="MacBook Pro 13.3″ 16GB/512GB Silver"
            price="$1,527.00"
          />
          <Newproduct
            imageUrl="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/53.jpg"
            title="Xbox Series"
            description="Wired Controller for Xbox Series"
            price="$78.89"
          />
        </div>
        <div className="flex flex-col">
          <header>
            <h2 className="text-black mt-[-100px] text-3xl flex ">Top Rated</h2>
          </header>
          <hr className="mt-[-38px] mr-3" />
          <Newproduct
            imageUrl="https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/37-400x400.jpg"
            title="Bluetooth Speakers"
            description="Portable Bluetooth Speaker with Voice Assistant, 10 Hour Battery Life"
            price="$65.55"
          />
          <Newproduct
            imageUrl="https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/136-400x400.jpg"
            title="OLED TVs"
            description="QLED Tivi 4K Samsung 55Q60B 55 inch Smart TV"
            price="$249.99"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
