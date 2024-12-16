import Image from 'next/image'
import React from 'react'
import Deliver from "../../../public/deliver.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import frame7 from "../../../public/frame7.png"
import frame8 from "../../../public/frame8.png"




export default function CheckOut() {
  return (


<div className="w-full h-auto mt-[70px] mb-[90px] flex justify-center gap-[119px]">
  {/* Left side: Form Content */}
  <div className="w-[30%] h-auto">
    {/* Title and description */}
    <div className="w-[397px] h-[24px]">
      <h1 className="font-semibold text-1xl">How would you like to get your order?</h1>
    </div>
    <div className="w-[436.61px] h-auto">
      <p className="text-sm text-gray-500 mt-2">
        Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match
        the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. 
        The KYC will be stored securely and used solely for the purpose of clearing customs 
        (including sharing it with customs officials) for all orders and returns.
        If your KYC does not match your shipping address, please click the link for more information.
        <a href="#" className="text-gray-500 underline"> Learn More </a>
      </p>
      
      {/* Deliver It Box */}
      <div className="w-[440px] h-[82px] mt-6 bg-white border-2 border-stone-950 rounded-md flex items-center space-x-2 pl-6">
        <Image src={Deliver} alt="image" width={24} height={24}/>
        <span className="text-black text-lg font-semibold">Deliver It</span>
      </div>
    </div>

    {/* Name and address form */}
    <div className="mt-10">
      <h1 className="font-semibold text-[21px]">Enter your name and address:</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-[440px] p-2 mt-7 border border-gray-300 text-black placeholder:text-black rounded-md text-[16px]"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-[440px] p-2 mt-7 border border-gray-300 rounded-md text-black placeholder:text-black"
        />
        <input
          type="text"
          placeholder="Address Line 1"
          className="w-[440px] p-2 mt-7 border border-gray-300 rounded-md text-black placeholder:text-black"
        />
        <p className="text-gray-500 text-[11px] ml-4 mt-1">We do not ship to P.O. boxes</p>
        <input
          type="text"
          placeholder="Address Line 2"
          className="w-[440px] p-2 mt-7 border border-gray-300 rounded-md text-black placeholder:text-black"
        />
        <input
          type="text"
          placeholder="Address Line 3"
          className="w-[440px] p-2 mt-7 border border-gray-300 rounded-md text-black placeholder:text-black"
        />

        {/* Postal Code and Locality */}
        <div className="mb-4 mt-7 flex justify-between gap-4">
          <div className="flex items-center">
            <input
              type="text"
              className="w-[211.19px] p-2 border border-gray-300 mt-1 rounded-md text-center text-black placeholder:text-black"
              placeholder="Postal Code"
            />
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="w-[211.19px] p-2 border border-gray-300 mt-1 rounded-md text-center text-black placeholder:text-black"
              placeholder="Locality"
            />
          </div>
        </div>

        {/* State/Territory and Country */}
        <div className="mb-4 mt-7 flex justify-between gap-4">
          <div className="flex items-center w-full relative">
            <input
              type="text"
              className="w-[211.19px] p-2 border border-gray-300 rounded-md mt-1 text-center pr-8"
              placeholder="State/Territory"
            />
            <RiArrowDropDownLine className="absolute right-2 text-xl" />
          </div>

          <div className="flex items-center w-full relative">
            <input
              type="text"
              className="w-[211.19px] p-2 border border-gray-300 mt-1 rounded-md text-center pr-8 text-black placeholder:text-black"
              placeholder="India"
              value="India"
              readOnly
            />
            <span className="absolute right-2 transform  top-1/2 
            -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"></span>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="flex items-center mb-4 mt-7">
          <input type="checkbox" id="signupEmails" className="mr-4 transform scale-150" />
          <label htmlFor="signupEmails" className="text-[15px] text-black">
            Save this address to my profile
          </label>
        </div>
        <div className="flex items-center mb-4 mt-7">
          <input type="checkbox" id="signupEmails" className="mr-4 transform scale-150" />
          <label htmlFor="signupEmails" className="text-[15px] text-black">
            Make this my preferred address
          </label>
        </div>

        {/* Contact Information */}
        <h1 className="font-semibold text-xl mt-9">What's your Contact Information?</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Email"
            className="w-[440px] p-2 mt-7 border border-gray-300 rounded-md text-black placeholder:text-black"
          />
          <p className="text-gray-500 text-[11px] ml-4">A confirmation email will be sent after checkout.</p>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-[440px] p-2 mt-7 border border-gray-300 rounded-md text-black placeholder:text-black"
          />
          <p className="text-gray-500 text-[11px] ml-4">Carrier might contact you to confirm delivery.</p>
        </div>

        {/* PAN Information */}
        <h1 className="font-semibold mt-8 text-xl">What's your PAN?</h1>
        <input
          type="text"
          placeholder="PAN"
          className="w-[440px] p-2 mt-7 border border-gray-300 rounded-md text-black placeholder:text-black"
        />
        <p className="text-gray-500 text-[11px] ml-4">
          Enter your PAN to enable payment with UPI, Net Banking, or local card methods
        </p>
        <input type="checkbox" id="signupEmails" className="mr-4 transform scale-150 mt-4" />
        <label htmlFor="signupEmails" className="text-[12px] text-gray-500">
          Save PAN details to Nike Profile
        </label>
        <br />
        <input type="checkbox" id="signupEmails" className="mr-4 transform scale-150 mt-10" />
        <label htmlFor="signupEmails" className="text-[12px] text-gray-500">
          I have read and consent to eShopWorld processing my information in accordance with the
          <span className="underline">Privacy Statement</span> and
          <span className="underline">Cookie Policy</span>. eShopWorld
          is a trusted Nike partner.
        </label>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center items-center mt-16">
        <button className="w-440 bg-[#f5f5f5] rounded-full text-[#757575] px-[190.67px] py-[16px]">
          Continue
        </button>
      </div>

      {/* Step Sections with Borders */}
      <div className="w-440 justify-center items-center">
        <div className="border-t-2 border-[#f5f5f5] mt-6">
          <p className="mt-6 text-black">Delivery</p>
        </div>

        <div className="border-t-2 border-[#f5f5f5] mt-6">
          <p className="mt-6 text-[#757575]">Shipping</p>
        </div>

        <div className="border-t-2 border-[#f5f5f5] mt-6">
          <p className="mt-6 text-[#757575]">Billing</p>
        </div>

        <div className="border-t-2 border-[#f5f5f5] mt-6">
          <p className="mt-6 text-[#757575]">Payment</p>
        </div>
      </div>
    </div>
    </div>

    {/* Right side: Order Summary */}
    <div className="w-[35%] h-auto pl-14">
      <h1 className='text-1xl text-black font-semibold'>Order Summary</h1>
      <div className="w-[320px] h-[677px] py-3">
        {/* Right section with flex to arrange content */}
        <div className="h-[135px]">
          {/* Subtotal */}
          <div className="flex justify-between">
            <p className='text-[16px] text-gray-500'>Subtotal</p>
            <p className='text-[16px] text-gray-500'>20 890.00</p>
          </div>

          {/* Delivery/Shipping */}
          <div className="flex justify-between mt-2">
            <p className='text-[16px] text-gray-500'>Delivery/Shipping</p>
            <p className='text-[16px] text-gray-500'>Free</p>
          </div>

          {/* Total */}
          <div className="flex justify-between border-t-2 border-b-2 border-[#f5f5f5] mt-2">
            <p className='text-[16px] text-black font-semibold mt-2'>Total</p>
            <p className='text-[16px]  text-black font-semibold mt-2 mb-4'>20 890.00</p>
          </div>
        </div>

        <div>
          <p className='text-[9px]  text-black'>(The total reflects the price of your order, including all duties and taxes)</p>
        </div>

        <div className="w-[320px] mb-2 mt-6 ">
          <h1 className="font-bold text-[15px]">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
        </div>

        <div className="w-[320px] h-[208px] flex">
          <Image src={frame7} alt="image" width={208} height={208} />
          <div className="w-[100px] h-[178.78px] flex flex-col justify-start">
            <p className="text-[13px] ml-3">Nike Dri-FIT <br />ADV TechKnit Ultra Mens Short-Sleeve Running Top</p>
            <p className="text-[12px] text-gray-500 ml-3">Qty 1</p>
            <p className="text-[12px] text-gray-500 ml-3 mt-1">Size L</p>
            <p className="text-[12px] text-gray-500 ml-3 mt-1">₹ 3,895.00</p>
          </div>
        </div>

        <div className="w-[320px] h-[208px] flex mt-2">
          <Image src={frame8} alt="image" width={208} height={208} />
          <div className="w-[100px] h-[178.78px] flex flex-col justify-start">
            <p className="text-[13px] ml-3">Nike Air Max 97 SE Mens Shoes</p>
            <p className="text-[12px] text-gray-500 ml-3 mt-1">Qty 1</p>
            <p className="text-[12px] text-gray-500 ml-3 mt-1">Size UK 8</p>
            <p className="text-[12px] text-gray-500 ml-3 mt-1">₹ 16,995.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>

)}