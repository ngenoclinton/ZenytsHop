import React from "react";
import { Item } from "../../../type";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { LuScanSearch } from "react-icons/lu";
import { MdOutlineStarHalf, MdOutlineStar } from "react-icons/md";
import Link from "next/link";

function Products({ productData }: any) {
  return (
    <div className="py-6 px-4 grid grid-cols-4 gap-4 ">
      {productData.map((item: Item) => (
        <div
          key={item._id}
          className="relative border-[1px] border-gray-200 mb-5 group cursor-pointer"
        >
          <AiOutlineHeart
            title="Add to Wishlist"
            className="absolute top-1 right-0 invisible group-hover:visible bg-white fill-red-700 text-3xl md:text-4xl p-2 z-20 scale-100 group-hover:scale-105 rounded-full cursor-pointer"
          />

          <span className="absolute top-2 left-1 visible bg-[#fff3cd] text-[#fd7e14] text-base fill-red-700 p-1 z-20 scale-100 group-hover:scale-105 rounded-base cursor-pointer">
            -
            {`${(((item.oldPrice - item.price) / item.oldPrice) * 100).toFixed(
              2
            )} %`}
          </span>

          <div className="w-full h-[350px] overflow-hidden p-1 relative">
            <FiChevronLeft
              title="Previous Image"
              className="absolute invisible group-hover:visible text-white text-2xl 
                    top-44 left-2 z-20 scale-100 group-hover:scale-105 bg-[#fff3cd] hover:bg-[#ffc107] rounded-full cursor-pointer"
            />

            <Link
              href={{
                pathname: `product/${item.title}`,
                query: {
                  _id: item._id,
                  title: item.title,
                  description: item.description,
                  oldPrice: item.oldPrice,
                  price: item.price,
                  category: item.category,
                  subCategory: item.subCategory,
                  features: item.features,
                  brand: item.brand,
                  images: item.images,
                  isNew: item.isNew,
                  sponsored: item.sponsored,
                  deals: item.deals,
                  newDeals: item.newDeals,
                  flashSale: item.flashSale,
                  itemsLeft: item.itemsLeft, // Optional, only applies if flashSale is true
                  variations: item.variations, // Optional, applies if product has different variations
                  warranty: item.warranty,
                  warrantyPeriod: item.warrantyPeriod, // Optional, only applies if warranty is true
                  officialStore: item.officialStore,
                },
              }}
              as={`product/${item.title}`}
            >
              {" "}
              <Image
                width={250}
                height={200}
                className="w-full h-full object-contain scale-100 group-hover:scale-105 transition duration-700 ease-in-out  z-10  "
                src={item.images[1]}
                alt="item Images"
              ></Image>
            </Link>

            <LuScanSearch
              title="View Details"
              className="absolute invisible group-hover:visible text-white bg-[#212529] text-2xl bottom-7 right-2 z-20 scale-100 group-hover:scale-105 cursor-pointer"
            />

            <FiChevronRight
              title="Next Image"
              className="absolute invisible group-hover:visible text-white text-2xl top-44 right-2 z-20 scale-100 group-hover:scale-105 bg-[#ffc107] bg-[#fff3cd] hover:bg-[#ffc107] rounded-full cursor-pointer"
            />
          </div>
          <div>
            <div className="flex justify-evenly items-center w-full">
              <Button
                variant="outline"
                className="flex flex-1 w-full text-white hover:text-white bg-[#dc3545] hover:bg-[#fd7e14] hover:bg-[#dc3545]  rounded-full p-2 cursor-pointer"
              >
                + Buy
              </Button>
            </div>
            <Link href="">
              <div className="px-1">
                <p className="text-lg font-semibold py-2">
                  {item.title.substring(0, 25)}
                </p>
                <p className="text-base  py-2">
                  {item.description.substring(0, 77)}..
                </p>
                <div className="flex items-left  md:spaece-x-4 flex-col">
                  <p className="text-[#198754] text-lg font-semibold">
                    Ksh {item.price}
                  </p>
                  <p className="text-[#dc3545] text-base line-through ">
                    Ksh {item.oldPrice}
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex gap-2 items-center text-[#ffc107]  mt-2">
              <MdOutlineStar title="Rating" className="hover:text-[#fd7e14]" />
              <MdOutlineStar title="Rating" className="hover:text-[#fd7e14]" />
              <MdOutlineStar title="Rating" className="hover:text-[#fd7e14]" />
              <MdOutlineStar title="Rating" className="hover:text-[#fd7e14]" />
              <MdOutlineStarHalf
                title="Half Star Rating"
                className="hover:text-[#fd7e14]"
              />
              <p className="text-base text-black font-semibold">(27)</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
