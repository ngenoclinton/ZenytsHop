import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  minusItem,
  plusItem,
  removeFromCart,
} from "../../../redux/shopperSlice";
import Link from "next/link";
import { useRouter } from "next/router";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variation?: string;
}

const Cart = () => {
  const dispatch = useDispatch();
  const router  = useRouter(); 

  const [subTotal, setSubTotalAmount] = useState<string>();
  const [warningMessgge, setWarningMessgge] = useState<boolean>(false); 
    const [user, setUser] = useState(null);

  const cartData = useSelector((state: any) => state.shopper.cartItems);
    const userInfo = useSelector((state:any)=> state.shopper.userInfo);
  const totalQuantity = useSelector(
    (state: any) => state.shopper.totalQuantity
  );

  useEffect(() => {
    let price = 0;
    cartData.map((item: any) => {
      (price = price + item.price * item.quantity), 0;
    });
    setSubTotalAmount(price.toFixed(2));
  }, [cartData]);

  useEffect(()=>{
    setWarningMessgge(true);
  },[])

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("user"); // Assume user data is stored in localStorage
    if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
      }
  },[]); 

  const handleCheckout = () => {
    if (user) {
      router.push("/checkout"); // Redirect to checkout page
    } else {
      router.push("/signin"); // Redirect to sign-in page
    }
  };


  return (
    <div className="p-4 md:p-8 text-lg">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {/* ✅ Show this when cart is empty */}
      {cartData.length === 0 ? (
        <div className="flex flex-col items-center  bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            {/* <Image src="/empty-cart.png" alt="Empty Cart" width={150} height={150} /> */}
            <div className="space-y-4">
              <p className="text-xl font-bold mt-4">
                Your shopping cart is empty.
              </p>
              <>
                <p className="text-gray-600 mt-2 text-lg font-semibold">
                  You're protected on ZenyT.com
                </p>
                <ul className="text-gray-700 mt-2 text-lg space-y-2">
                  <li>✅ Secure payment</li>
                  <li>✅ Refund and returns</li>
                  <li>✅ Fulfillment by ZenyT.com Logistics</li>
                </ul>
              </>
            </div>
          </div>
          <p className="bg-red-100 text-red-500 px-4 py-2 rounded-md mt-4">
            <a href="/sign-in" className="font-semibold underline">
              Sign in
            </a>{" "}
            to get up to{" "}
            <span className="font-bold">$20.00 welcome perks!</span>
          </p>
          <Link href="/">
            <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 cursor-pointer">
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        // ✅ Show cart items when available
        <>
          <div className="flex w-3/3 justify-center items-center">
            <div className="w-full flex justify-between flex-col border-b py-4 px-4 text-green-700 font-semibold">
              Cart: ({cartData.length}) items
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md md:flex">
            <div className="w-full md:w-2/3">
              {cartData.map((item: any) => (
                <div
                  key={item.id}
                  className="w-full flex justify-between flex-col border-b py-4 px-4"
                >
                  <div className="flex justify-between py-1 w-full text-lg">
                    <Image
                      src={item.images[0]}
                      alt="{item.name}"
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <div className="w-full flex flex-col flex-1 text-base">
                      <div className=" w-full ml-4 flex-2 space-y-2">
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="">Seller: </p>
                        <p className="">Items in Store: </p>
                        <p className="text-sm text-gray-500">
                          {item.variation}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold flex">
                      $
                      {(item.price * item.quantity)
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-lg">
                    <div
                      className="flex font-semibold items-center cursor-pointer"
                      onClick={() => dispatch(removeFromCart(item._id))}
                    >
                      <span className="text-red-500 cursor-pointer border-b-[2px] border-b">
                        Remove
                      </span>
                      <FaTrash className="text-red-500 cursor-pointer ml-2" />
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          dispatch(
                            minusItem({
                              _id: item._id,
                              quantity: item.quantity,
                            })
                          )
                        }
                        className="px-2 py-1 border rounded cursor-pointer"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            plusItem({
                              _id: item._id,
                              quantity: item.quantity,
                            })
                          )
                        }
                        className="px-2 py-1 border rounded cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="w-1/4 flex justify-center flex-col border-b py-4 px-4 font-semibold bg-red-500 text-white rounded-lg px-2 py-1 cursor-pointer mt-4 tetxt-center"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg mt-4 md:mt-0 md:ml-4 space-y-2">
              <h3 className="text-lg font-bold mb-2">Order Summary</h3>
              <p className="flex justify-between text-gray-700 text-base">
                <span>Item subtotal</span>{" "}
                <span>
                  $
                  {Number(subTotal)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </span>
              </p>
              <p className="flex justify-between text-gray-700 text-base">
                <span>Shipping fee</span>{" "}
                <span>
                  ${" "}
                  {`${((Number(subTotal) * 16) / 1000)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
                </span>
              </p>
              <p className="flex justify-between text-gray-700 text-base text-red-500">
                <span>Shipping promotion</span>{" "}
                <span>
                  -
                  {`${((Number(subTotal) * 16) / 1000 / 3)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
                </span>
              </p>
              <hr className="my-2" />
              <p className="flex justify-between text-lg font-bold text-base">
                <span>Subtotal excl. tax</span>{" "}
                <span>
                  ${" "}
                  {`${(
                    Number(subTotal) +
                    (Number(subTotal) * 16) / 1000 -
                    (Number(subTotal) * 16) / 1000 / 3
                  )
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}
                </span>
              </p>
                    {/* If user is already Signed in redirect to checkout page onClick button, but redirect to  signin page */}
                    {/* In signIn page if the user is registered, redirect to checkout on clicking sigIn button, else tell user to regiser first */}
                    <button 
                    className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg font-bold hover:bg-orange-600 text-lg"
                    onClick={handleCheckout}
                    >
                        Check out
                    </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
