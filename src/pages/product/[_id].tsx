import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Search,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart, plusItem } from "../../../redux/shopperSlice";
import toast, { Toaster } from 'react-hot-toast';

const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch(); 
  const [isLoading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState("08h : 57m : 17s");  
  const [product, setProduct] = useState<any>({});
  console.log(product); //returns undefined on reload 

  const _id = Number(product._id); 

  useEffect(() => {    
      setLoading(true);
      setProduct(router.query || {}); // Ensure there's a fallback
      setLoading(false);    
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>No product found.</p>;  

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     // Simulate countdown (Replace with actual logic)
  //   }, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  const handleImageChange = (index: number) => {
    setCurrentImage(index);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev > 0 ? prev - 1 : product.images.length - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev < product.images.length - 1 ? prev + 1 : 0
    );
  };

  if (isLoading) {
    return <p className="text-center text-xl text-gray-600">Loading...</p>;
  }

  console.log(product.officialStore);
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
       {/* toast */}
       <Toaster
      reverseOrder={false}
      position="top-center"
      toastOptions={{
        style:{
          borderRadius:"8px",
          background:"#333",
          color:"#fff"
        }
      }}/>
      {/* Left Side - Product Images */}
      <div className="col-span-1 flex">
        {/* Thumbnails */}
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={prevImage}
            className="text-gray-600 hover:text-gray-800"
          >
            <ChevronUp size={24} />
          </button>
          {product?.images?.map((image: any, index: any) => (
            <img
              key={index}
              src={image}
              alt="thumbnail"
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer border transition-all duration-300 ${
                currentImage === index ? "border-blue-500" : "border-gray-300"
              }`}
              onMouseEnter={() => handleImageChange(index)}
            />
          ))}
          <button
            onClick={nextImage}
            className="text-gray-600 hover:text-gray-800"
          >
            <ChevronDown size={24} />
          </button>
        </div>
        {/* Main Image */}
        <div className="relative mx-4">
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <ChevronLeft size={32} />
          </button>
          <img
             src={product?.images?.[currentImage] || "/placeholder.jpg"} 
             alt={product?.title || "Product Image"}
            className="w-full max-w-md h-auto rounded-lg transition-all duration-500"
          />
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {/* Middle Section - Product Details */}
      <div className="col-span-1">
        {product.officialStore == "true" && (
          <span className="bg-blue-200 text-blue-700 px-2 py-1 text-xs rounded">
            Official Store
          </span>
        )}
        <h1 className="text-xl font-bold mt-2">{product.title}</h1>
        <p className="text-gray-600 text-sm">{product.description}</p>

        {/* Flash Sale Section */}
        <div className="text-white mt-4 rounded-lg border-[1px]">
          <div className="flex justify-between bg-red-500 w-full px-3 py-1">
            <span className="font-bold">Flash Sales</span>
            <span className="text-sm">Time Left: {timeLeft}</span>
          </div>
          <div className="bg-white text-black p-3">
            <div className="text-2xl font-bold">KSh {product.price}</div>
            <div className="text-sm line-through">KSh {product.oldPrice}</div>
            <span className="bg-yellow-400 text-black px-2 py-1 text-xs rounded">
              -
              {Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              )}
              %
            </span>
            <div className="w-full bg-gray-300 h-2 mt-2 rounded">
              <div
                className="bg-red-600 h-2 rounded"
                style={{ width: "30%" }}
              ></div>
            </div>
            <p className="text-xs mt-1">3 items left</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 mt-4">
          <button className="bg-orange-500 text-white py-2 w-full rounded-lg hover:bg-orange-600"
          onClick={() =>
                          dispatch(
                            plusItem({
                              _id: _id,
                              title: product.title,
                              description: product.description,
                              oldPrice: product.oldPrice,
                              price: product.price,
                              category: product.category,
                              subCategory: product.subCategory,
                              features: product.features,
                              brand: product.brand,
                              images: product.images,
                              isNew: product.isNew,
                              sponsored: product.sponsored,
                              deals: product.deals,
                              newDeals: product.newDeals,
                              flashSale: product.flashSale,
                              itemsLeft: product.itemsLeft, // Optional, only applies if flashSale is true
                              quantity:product.quantity,
                              variations: product.variations, // Optional, applies if product has different variations
                              warranty: product.warranty,
                              warrantyPeriod: product.warrantyPeriod, // Optional, only applies if warranty is true
                              officialStore: product.officialStore,
                            })
                          ) && toast.success(`${product.title.substring(0,20)} is added to cart`)
                        }
          >
            Add to Cart
          </button>
          <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
            <Heart size={24} className="text-red-500" />
          </button>
          <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
            <Search size={24} className="text-blue-500" />
          </button>
        </div>
      </div>

      {/* Right Section - Delivery & Returns */}
      <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-bold">Delivery & Returns</h2>
        <p className="text-sm mt-2">Choose your location</p>
        <select className="w-full mt-1 p-2 border rounded-lg">
          <option>Isiolo</option>
          <option>Nakuru</option>
          <option>Kericho</option>
          <option>Kisumu</option>
          <option>Kisii</option>
          <option>Nairobi</option>
          <option>Mombasa</option>
          <option>Meru</option>
          <option>Nyeri</option>
          <option>Vihiga</option>
        </select>
        <select className="w-full mt-4 p-2 border rounded-lg">
          <option>Isiolo</option>
          <option>Nakuru</option>
          <option>Kericho</option>
          <option>Kisumu</option>
          <option>Kisii</option>
          <option>Nairobi</option>
          <option>Mombasa</option>
          <option>Meru</option>
          <option>Nyeri</option>
          <option>Vihiga</option>
        </select>
        <div className="mt-4">
          <p className="text-sm font-semibold">Pickup Station</p>
          <p className="text-xs text-gray-600">Delivery Fees KSh 70</p>
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold">Door Delivery</p>
          <p className="text-xs text-gray-600">Delivery Fees KSh 270</p>
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold">Return Policy</p>
          <p className="text-xs text-gray-600">Easy Return, Quick Refund</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
