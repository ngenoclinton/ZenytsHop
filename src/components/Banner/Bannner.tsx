import Image from "next/image";
import Slider from "react-slick";
import BannerText from "./BannerText";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ButtonPrimary from "../Buttons/ButtonPrimary";


const NextArrow = (props:any) => {
 const {onClick} = props
 return(
    <div 
    className="absolute bottom-12   left-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
    onClick={onClick}>
        <BsArrowLeft/>
    </div>
 )
};

const PrevArrow= (props:any) => {
    const {onClick} = props
    return(
       <div 
       className="absolute bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
       onClick={onClick}>
           <BsArrowRight/>
       </div>
    )
   };

const Bannner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };
  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]">
      <div className="w-2/3 h-[410px] shadow- relative shadow">
        <Slider {...settings}>
          <div className="w-full h-[410px] relative ">
            <Image
              className="w-full h-full object-cover rounded"
              src="https://img.freepik.com/free-photo/christmas-gift-boxes-various-colors-placed-shopping-cart_1150-19244.jpg?ga=GA1.1.1315670878.1727435405&semt=ais_authors_boost"
              alt="Image here"
              width={1000}
              height={1000}
              priority
            />
            <BannerText
              title="Tech Deals – 50% Off!"
              className="absolute top-12 left-8 w-100 h-full flex flex-col gap-5 text-white"
              description="✅ Upgrade your setup with the latest Noise-Canceling Wireless
            Headphones!"
              btnText="SHOP NOW"
              price="$99.99 (was $199.99)"
              paragraph="Limited Stock Available!"
            />
          </div>
          <div className="w-full h-[410px] relative ">
            <Image
              src="https://img.freepik.com/premium-photo/2240163455_935622-34.jpg?ga=GA1.1.1315670878.1727435405&semt=ais_authors_boost"
              alt="Image here"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
              title="✨ New Arrivals  – Trendy new products"
              className="absolute top-12 left-8 w-100 h-full flex flex-col gap-5 text-white"
              description="🔥 Fresh Styles, Latest Tech & More!"
              btnText="SHOP NOW"
              price=""
              paragraph=" Upgrade Your Lifestyle"
            />
          </div>
          <div className="w-full h-[410px] relative ">
            <Image
              src="https://img.freepik.com/premium-photo/black-friday-podium-platform-with-black-gold-items-3d-product-display_1277096-15393.jpg?ga=GA1.1.1315670878.1727435405&semt=ais_authors_boost" 
              alt="Image here"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
              title="💎 Luxury & Premium Products –  Elevate Your Experienc"
              className="absolute top-12 left-8 w-100 h-full flex flex-col gap-5 text-white"
              description="🌟 Indulge in the Finest Selections! "
              btnText="SHOP NOW"
              price=""
              paragraph=" 🛒 Shop Luxury – Because You Deserve the Best!"
            />
          </div>
        </Slider>
      </div>
      <div className="w-1/3 h-[410px] border-[1px] border-gray-200 rounded-lg shadow-lg p-3 flex flex-col justify-between ">
        <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-black">Flash Pick of the Day</h2>
            <p className="text-base text-zinc-600 underline underline-offset-3 cursor-pointer">View All</p>
        </div>
        <Image className="h-60 object-cover" src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?ga=GA1.1.1315670878.1727435405&semt=ais_hybrid" width={1000} height={500} alt="flashsale" />
        <ButtonPrimary btnText="Options"/>  
        <p className="text-lg text-black font-semibold">From $177.99</p>   
        <p>Discover the hottest new products in fashion, gadgets, and home essentials.</p>
      </div>
    </div>
    // <div className="max-auto h-20 px-4 flex justify-between gap-2">
    //   <div className="bg-black flex  relative w-full">01</div>

    //   <div className=" w-full grid grid-flow-col grid-rows-3 grid-cols-2 gap-1">
    //     <div className="bg-pink-500 ">One 01</div>
    //     <div className="bg-blue-300">Five 02</div>
    //     <div className="row-start-2 row-span-3 col-start-1 col-span-3 bg-green-300 items-center">six 03</div>
    //   </div>
    // </div>
  );
};

export default Bannner;
