import React from "react";
import { NavbarDefault } from "../components/layout/Navbar";
import NavbarWithMegaMenu from "../components/layout/Navbar2";
import Hero from "../components/layout/Hero";
import Company from "../components/layout/Company";
import { Card1 } from "../components/common/Card";
import ProductsGrid from "../components/layout/products-grid";
import Card2 from "../components/layout/Card2";
import Products from "../components/layout/Productnew";
import Card3 from "../components/layout/Card3";
import Productsflex from "../components/layout/Productflex";
import Card4 from "../components/layout/Card4";
import Footer from "../components/layout/Footer";
// import RegisterPage from "./RegisterPage";
// import ProductsCard from "./Product";
// import { BookingCard } from "./Cats";
// import Contact from "./Contact";
// import Shop from "./Shop";
// import About from "./About";
// import Error from "./Error";
// import OrderTrack from "./Order";
// import Wishlist from "./Wishlist";
import BlogPage from "./Blog";

const Homes = () => {
  return (
    <div>
      <NavbarDefault />
      <NavbarWithMegaMenu />
      <Hero />
      <Company />
      <p className="font-bold px-10 text-4xl">Deals of the day</p>
      <hr className="mt-5 p-4" />
      <div className="flex gap-4 px-12 py-10">
        <Card1
          imageUrl="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/54.jpg"
          category="Xbox Series"
          title="Xbox Series S -1TB Gaming All-Digital Console, 4K Streaming Media"
          price="279.99"
          oldPrice="289.99"
          days="1152"
          hours="00"
          minutes="51"
          seconds="25"
        />
        <Card1
          imageUrl="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/119.jpg"
          category="Samsung Galaxy"
          title="Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB"
          price="699.99"
          oldPrice="949.99"
          days="1152"
          hours="00"
          minutes="51"
          seconds="25"
        />
      </div>
      <p className="font-bold px-10 text-4xl">Deals of the day</p>
      <hr className="p-4 mt-6" />
      <ProductsGrid />
      <Card2 />
      <Products />
      <Card3 />
      <Productsflex />
      <Card4 />
      <Footer />
      {/* <BookingCard /> */}
      {/* <Contact/> */}
      {/* <ProductsCard/> */}
      {/* <RegisterPage/> */}
      {/* <Shop/> */}
      {/* <About/> */}
      {/* <Error/> */}
      {/* <OrderTrack/> */}
      {/* <Wishlist/> */}
      <BlogPage/>
     
    </div>
  );
};

export default Homes;
