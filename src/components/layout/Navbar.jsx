import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { SelectDefault } from "../common/select";
import { Heart } from "lucide-react";
import Logo from "../../assets/asset 0.png";
import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-12 flex  flex-col gap-16 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className="flex items-center gap-24 w-full overflow-hidden border-blue-600 border-2 rounded-md h-14">
        <SelectDefault />
        <input
          type="text"
          className="h-24 p-2 focus:border-0 "
          placeholder="Search got product"
        />
        <button className="h-28 bg-blue-600 text-white px-4">SEARCH</button>
      </div>

      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      ></Typography> */}
    </ul>
  );

  return (
    <Navbar className="m-0 min-w-screen max-w-none rounded-none">
      <div className=" w-full mx-auto flex items-center justify-between text-blue-gray-900 ">
        <Typography
          as="a"
          href="#"
          className="mr-32 cursor-pointer py-1.5 font-medium"
        >
          <div>
            <img src={Logo} alt="" width={170} className="min-h-12 min-w-24 ml-12" />
          </div>
        </Typography>

        <div className="">{navList}</div>
        <div className="flex items-center gap-x-8 ">
          <div className="mt-3 text-black">
            <Heart height={30} width={30} />  
          </div>

          <div className="flex flex-col">
            <FiUser className="size-8 mt-6" />
            <div className="px-6">
              <p className="text-gray-700 px-5 mt-[-40px]">my Account</p>
              <span className="px-5">Log In</span>
            </div>
          </div>

          <div className="flex flex-col mt-10 ml-[-20px]">
            <AiOutlineShoppingCart className="size-8 mt-[-10px]" />
            <div className="">
              <p className="text-gray-700 px-10 mt-[-40px] ">my cart</p>
              <span className="px-10">$0.00</span>
            </div>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
    </Navbar>
  );
}
