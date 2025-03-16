import React from 'react'
import { NavigationMenuComponent } from './NavigationMenu'
import Image from 'next/image'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { FiChevronsUp } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPlaceOfWorship } from "react-icons/fa6";

function NavBarBottom() {
  return (
    <div className='mx-auto py-2 px-6 flex items-center justify-between max-w-6xl'>
        <NavigationMenuComponent/>  
        {/* <div className='flex items-center justify-evenly gap-4'>
            <div className="flex items-center gap-2">
                <Image className='w-6' src={image} alt='Image here'/>
                <p className="text-sm font-semibold">How do you wnt your Items?</p>
                <FiChevronDown />
                <span className="w-[1px] h-4 bg-orange-500 inline-flex ml-"></span>
            </div>
            <div className="flex items-center gap-2">
            <MdOutlineLocationOn />
            <p className="text-sm ">Nairobi, 7001</p>
            <span className="w-[1px] h-4 bg-orange-500 inline-flex ml-"></span>
            <FaPlaceOfWorship />
            <p className="text-sm ">Nairobi, Kasarani</p>
            </div>
        </div> */}
        
        <ul className='flex gap-6 text-sm'>
            <li className='navLi'>Home</li>
            <li className='navLi'>Help Center</li>
            <li className='navLi'>Get the App</li>
            <li className='navLi'>Community</li>
            <li className='navLi'>ZenyT+</li>
            
        </ul>
        <span className='text-[#fd7e14] navLi'>Sell on ZenyT</span>

    </div>
  )
}

export default NavBarBottom