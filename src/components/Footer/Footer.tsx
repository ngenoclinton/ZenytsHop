import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white py-10">
      {/* Top Footer */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Need Help Section */}
        <div>
          <h3 className="text-base font-semibold mb-3">NEED HELP?</h3>
          <ul className="text-sm">
            <li>Chat with us</li>
            <li>Help Center</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-base font-semibold mb-3">USEFUL LINKS</h3>
          <ul className="text-sm">
            <li>Track Your Order</li>
            <li>Shipping and Delivery</li>
            <li>Pick-up Stations</li>
            <li>Return Policy</li>
            <li>How to Order?</li>
          </ul>
        </div>

        {/* About Zenyt Section */}
        <div>
          <h3 className="text-base font-semibold mb-3">ABOUT ZENYT</h3>
          <ul className="text-sm">
            <li>About Us</li>
            <li>Returns and Refunds Policy</li>
            <li>Zenyt Careers</li>
            <li>Terms and Conditions</li>
            <li>Privacy Notice</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-base font-semibold mb-3">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="mb-2 text-sm">Get updates on the latest deals and offers!</p>
          <form className="flex mt-4 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-1 rounded-l bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#fd7e14] px-4 py-2 rounded-r hover:bg-[#dc3545] transition"
            >
              <MdEmail size={24} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600 mt-6 py-4 text-center">
        <p className="text-sm">&copy; 2024 Zenyt Shop. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 ">
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
