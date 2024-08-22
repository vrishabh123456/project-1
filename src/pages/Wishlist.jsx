import React from "react";

const Wishlist = () => {
  return (
    <div className="p-4 px-20">
      <p className="font-bold text-black text-3xl py-5">My Whislist</p>
      <div className="grid grid-cols-12 gap-4 border-b border-gray-200 py-2">
        <div className="text-black col-span-6 font-bold py-4">
          Product name
        </div>
        <div className="text-black col-span-2 font-bold">
          Unit price
        </div>
        <div className=" text-black col-span-2 font-bold">
          Stock status
        </div>
      </div>
      <p className="text-black py-5">No products added to the wishlist</p>
    </div>
  );
};

export default Wishlist;
