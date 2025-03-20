import React, { useState } from "react";

const Checkout = () => {
    
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "Kenya",
    street: "",
    city: "",
    county: "Nairobi County",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6">
      <div className="md:w-2/3 p-6">
        <h2 className="text-xl font-bold">INFORMATION</h2>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 my-2 rounded"
        />
        <h2 className="text-xl font-bold mt-4">BILLING AND SHIPPING ADDRESS</h2>
        <div className="flex gap-2">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 border p-2 my-2 rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 border p-2 my-2 rounded"
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 my-2 rounded"
        />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full border p-2 my-2 rounded"
        >
          <option value="Kenya">Kenya</option>
        </select>
        <input
          type="text"
          name="street"
          placeholder="House number and street name"
          value={formData.street}
          onChange={handleChange}
          className="w-full border p-2 my-2 rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="Town / City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border p-2 my-2 rounded"
        />
        <input
          type="text"
          name="county"
          placeholder="State / County"
          value={formData.county}
          onChange={handleChange}
          className="w-full border p-2 my-2 rounded"
        />
        <button className="w-full mt-4 bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-800">
          Continue to payment
        </button>
      </div>

      <div className="md:w-1/3 p-6 border-l">
        <h2 className="text-xl font-bold">YOUR CART</h2>
        <div className="flex justify-between items-center my-4">
          <img src="https://via.placeholder.com/50" alt="Product" className="w-12 h-12" />
          <span>Let Me Call You Back</span>
          <span>KSh 1,599</span>
        </div>
        <hr />
        <div className="flex justify-between my-2">
          <span>Subtotal</span>
          <span>KSh 1,599</span>
        </div>
        <div className="flex justify-between my-2">
          <span>Shipping</span>
          <span>KSh 300</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-lg my-2">
          <span>Total</span>
          <span>KSh 1,899</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
