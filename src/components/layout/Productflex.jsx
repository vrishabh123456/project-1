import React from "react";
import { Flexproduct } from "../common/Flexproduct";

const productsflex1 = () => {
  return (
    <div>
      <header>
        <h3 className="text-4xl px-20 py-16">Recently Viewed Products</h3>
        <hr className="mt-[-50px] ml-20 mr-20" />
      </header>

      <div>
        <div className="grid grid-cols-5">
          <Flexproduct
            imageUrl="https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/78-400x400.jpg"
            title="Laptops"
            description="Laptop 17.3″ FHD 165Hz IPS Display, 16GB DDR5, 1TB Gen 4 SSD"
            price="$1,527.00"
          />
          <Flexproduct
            imageUrl="https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/114-400x400.jpg"
            title="Apple AirPods"
            description="Unlocked iPhone 12 5G LTE 6.1” 4GB-128GB"
            price="$744.00"
          />
          <Flexproduct
            imageUrl="https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/82-400x400.jpg"
            title="Gaming Headsets"
            description="Hi-Res Audio Over Ear Wireless Headset"
            price="$30.99"
          />
          <Flexproduct
            imageUrl="https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/54-400x400.jpg"
            title="Xbox Series"
            description="Xbox Series S -1TB Gaming All-Digital Console, 4K Streaming Media"
            price="$78.89"
          />
          <Flexproduct
            imageUrl="https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/141-400x400.jpg"
            title="65 TVs QLED TVs"
            description="Samsung 65″ Crystal UHD 4K Smart TV"
            price="$65.55"
          />
        </div>
      </div>
    </div>
  );
};

export default productsflex1;
