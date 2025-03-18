import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (router.query) {
      setProduct(router.query);
      setLoading(false);
    }
  }, [router.query]);

  if (isLoading) {
    return <p className="text-center text-xl text-gray-600">Loading...</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12 bg-[#212529] text-white">
      {/* Left Section - Images with Dots Navigation */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="w-full h-[400px] flex justify-center items-center bg-gray-900 rounded-lg overflow-hidden">
          <img
            src={product.images?.[currentImage] || ""}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        {/* Dot Navigation */}
        <div className="flex flex-col justify-center gap-2 mt-4">
          {product.images?.map((_:any, index:any) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                currentImage === index ? "bg-[#fd7e14]" : "bg-gray-500"
              }`}
              onClick={() => setCurrentImage(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-[#fd7e14]">{product.title}</h1>
        <p className="text-lg text-gray-400">{product.category} - {product.brand}</p>
        <p className="text-gray-300">{product.description}</p>
        
        <div className="flex gap-4 text-lg">
          <span className="text-[#dc3545] line-through">${product.oldPrice}</span>
          <span className="text-[#20c997] font-bold">${product.price}</span>
        </div>

        <div>
          <h3 className="text-[#ffc107] font-semibold">Features:</h3>
          <p className="text-gray-300">{product.features}</p>
        </div>

        {product.isNew === "true" && (
          <span className="text-[#198754] font-semibold bg-[#20c997] px-3 py-1 rounded-md w-fit">
            New Arrival
          </span>
        )}

        <button className="bg-[#fd7e14] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#dc3545] transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
