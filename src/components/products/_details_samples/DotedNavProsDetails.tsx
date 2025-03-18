import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8">
        <header className="flex justify-between items-center text-gray-700 text-sm mb-4">
          <span className="text-lg font-bold">LEMIE</span>
          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-900">
              Shop
            </a>
            <a href="#" className="hover:text-gray-900">
              Models
            </a>
            <a href="#" className="hover:text-gray-900">
              Buyer’s Guide
            </a>
            <a href="#" className="hover:text-gray-900">
              Account
            </a>
          </nav>
          <Button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            Test Drive
          </Button>
        </header>

        <section className="mt-8 text-gray-800">
          <h2 className="text-5xl font-light">02</h2>
          <h3 className="text-xl font-semibold mt-2">Cybertruck - 034</h3>
          <p className="text-sm text-gray-500">
            Full loaded <span className="text-orange-500">820k</span> lbs Gross
            Combination Weight
          </p>
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-light">
              EV <span className="text-orange-500">Solar</span> Traveling
            </h3>
            <p className="mt-4 text-gray-600">
              The independent motors provide instant torque and unmatched power,
              enabling the driver to remain fully in control even with loads.
              Achieve faster 0-60 mph speeds, load, and maintaining liquid
              cooling on each axle.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <strong>20 seconds</strong> - 0-60 mph
              </li>
              <li>
                <strong>500mi</strong> - Range
              </li>
              <li>
                <strong>2kWh</strong> - Max Energy
              </li>
            </ul>
            <Button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded-lg">
              Build Your Custom
            </Button>
          </div>

          <div className="relative">
            <div className="w-full relative">
              {/* Image Container with Fixed Dimensions */}
              <div className="w-full h-[350px] flex justify-center items-center rounded-lg overflow-hidden">
                <img
                  src={product.images?.[currentImage] || ""}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Dot Navigation (Fixed Position) */}
              <span>{`<`}</span> <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 flex gap-2">
                {product.images?.map((_: any, index: any) => (
                  <span
                    key={index}
                    className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-black cursor-pointer"
                    onClick={() => setCurrentImage(index)}
                  >
                    <button
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImage === index ? "bg-[#fd7e14]" : "bg-gray-500"
                      }`}
                    ></button>
                  </span>
                ))}
              </div><span>{`>`}</span>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default ProductDetails;
