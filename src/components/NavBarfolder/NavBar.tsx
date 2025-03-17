import Image from "next/image";
import React from "react";
import logo from "../../public/assets/myimages/cartLogo.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import { NavigationMenuComponent } from "./NavigationMenu";
import NavBarBottom from "./NavBarBottom";

function NavBar() {
  return (
    <div className="w-full shadow-lg">
      <div className="w-full h-full border border-b-[1px] border-b[#ffc107] border-b-green700 border-b-[#f8f9fa] ">
        <div className="container max-auto h-20 px-4 flex items-center justify-between gap-2">
          {/* Logo*/}
          <div className="navBarHover">
            <Image
              src="https://files.oaiusercontent.com/file-4SGGp8JJb5UbwA6sR99CE8?se=2025-03-13T16%3A54%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9ff7cb5c-18bb-4fa9-bf1b-7292dcbdb7b1.webp&sig=2KwYihtBcZw0PLlROYStDBvl3FZZqMXCuKolTbixC9M%3D"
              alt="logo"
              className=""
              width={44}
              height={44}
            />
            <h1 className="text-2xl text-[#fd7e14] font-bold">ZenyTsHop</h1>
          </div>
          {/* Logo ends here */}
          {/* Departments start here  */}
          {/* <div className="navBarHover">
          <div className="grid grid-cols-2 gap-[1px] w-4">
              <span className="w-1.5 h-1.5 border-[1px] font-bold border-[#fd7e14] inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-[#fd7e14] font-bold inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-[#fd7e14] font-bold inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-[#fd7e14] font-bold inline-flex"></span>
          </div>
          <p className='font-semibold text-[#fd7e14]'>Departments</p>
      </div> */}
          {/* End of departments */}
          {/* Departments start here  */}
          {/* <div className="navBarHover">
          <div className="grid grid-cols-2 gap-[1px] w-4">
              <span className="w-1.5 h-1.5 rounded-full border-[1px] border-[#fd7e14] font-bold inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-[#fd7e14] font-bold inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-[#fd7e14] font-bold inline-flex"></span>
              <span className="w-1.5 h-1.5 rounded-full border-[1px] border-[#fd7e14] font-bold inline-flex"></span>
          </div>
          <p className='font-semibold text-[#fd7e14]'>Services</p>
      </div> */}
          {/* End of departments */}
          {/*  */}

          {/*  */}
          {/*  Menu*/}
          {/* <NavigationMenuComponent/> */}
          {/* End of menue */}
          {/* Start Search */}
          <div className="h-10 flex flex-1 relative cursor-pointer">
            <input
              type="text"
              className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px]  border border-[#ffc107] focus-visible:border-[#ffc107] duration-200 hover:border hover:border-[1px]"
              placeholder="Search everything at ZenyT online and in Store"
            />
            <span className="absolute w-8 h-8 rounded-full flex font-bold items-center justify-center top-1 right-1 bg-[#ffc107] text-black tex-xl">
              <BsSearch />
            </span>
          </div>
          {/* End Search */}

          {/* Saved Items */}
          <div className="navBarHover text-[#fd7e14]">
            <AiOutlineHeart className="text-lg text-red- text-green-700" />
            <div>
              <p className="text-xs">Saved</p>
              <h2 className="text-base font-semibold -mt-1">My Items</h2>
            </div>
          </div>
          {/* End of saved Items */}

          {/* Start of Accounts */}
          <div className="navBarHover text-[#fd7e14]">
            <AiOutlineUser className="text-lg text-[#ffc107] text-green-700" />
            <div>
              <p className="text-xs">Sign In</p>
              <h2 className="text-base font-semibold -mt-1">Account</h2>
            </div>
          </div>
          {/* Endn of Accounts */}

          {/* Cart starts here */}
          <div className="navBarHover flex flex-col relative items-center justify-center gap-2 h-12 px-5 rounded-full bg-transparent hover:navBarHover duration-300 text-[#fd7e14]">
            <BsCartPlus className="text-xl text-red-700 font-semibold" />
            <p className="text-[14px] -mt-2 text-black">
              <span className="text-green-900">$</span>0.00
            </p>
            <span className="absolute w-4 h-4 bg-[#ffc107]  text-xl text-green-700 -top-2 right-6 rounded-full flex items-center justify-center font-bodyFont text-xs ">
              0
            </span>
          </div>
          {/* Cart start here */}
        </div>
      </div>
      <NavBarBottom />
    </div>
  );
}

export default NavBar;
