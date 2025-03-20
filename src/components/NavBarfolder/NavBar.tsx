import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import NavBarBottom from "./BottomNavBar";
import Link from "next/link";
import { useSelector } from "react-redux";

function NavBar() {
  const [totalAmount, setTotalAmount] = useState<string>("");

  const cartData = useSelector((state:any)=> state.shopper.cartItems); 
  console.log(cartData);
  const totalQuantity = useSelector((state:any)=> state.shopper.totalQuantity); 

  useEffect(()=>{
    let price = 0
    cartData.map((item:any)=>{
      price = price + item.price * item.quantity, 0; 
    })
    setTotalAmount(price.toFixed(2));
  },[cartData]); 

console.log(totalQuantity);
  return (
    <div className="w-full shadow-lg sticky top-0 z-50 bg-[#f8f9fa]">
      <div className="w-full h-full border border-b-[1px] border-b[#ffc107] border-b-green700 border-b-[#f8f9fa]">
        <div className="container max-auto h-20 px-4 flex items-center justify-between gap-2">
          {/* Logo*/}
          <Link href="/">
            <div className="navBarHover">
              <Image
                src="https://cdn-icons-png.freepik.com/256/13078/13078001.png?ga=GA1.1.1315670878.1727435405&semt=ais_hybrid"
                alt="logo"
                className=""
                width={44}
                height={44}
              />
              <h1 className="text-2xl text-[#fd7e14] font-bold">ZenyTsHop</h1>
            </div>
          </Link>
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
          <Link href="/cart">
            <div className="navBarHover flex flex-col relative items-center justify-center gap-2 h-12 px-5 rounded-full bg-transparent hover:navBarHover duration-300 text-[#fd7e14]">
              <BsCartPlus className="text-xl text-red-700 font-semibold" />
              <p className="text-[14px] -mt-2 text-black">
                <span className="text-green-900">$</span>{isNaN(Number(totalAmount)) ? '0.00' : totalAmount.replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </p>
              <span className="absolute w-4 h-4 bg-[#ffc107]  text-xl text-green-700 -top-2 right-6 rounded-full flex items-center justify-center font-bodyFont text-xs ">
                {totalQuantity > 0 ? totalQuantity : 0}
              </span>
            </div>
          </Link>
          {/* Cart start here */}
        </div>
      </div>
      <NavBarBottom />
    </div>
  );
}

export default NavBar;
