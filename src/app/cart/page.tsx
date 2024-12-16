import React from 'react'
import Image from 'next/image'
import layout from "../../../public/layout.png"

export default function Cart() {
  return (
    <div className="w-[1411px] h-auto py-[96px] flex justify-between">
  <div className="w-[1100px] h-[632.89px] px-[123.5px]">
    <div className="w-[1100px] h-[547px] flex pr-8 gap-4">
      {/* Left Section with bg-slate-400 */}
      <div className="w-[733.3px] h-[547px] px-[8px] py-[12px]">
        <div className='w-[717.23px] h-[62px] bg-[#F7F7F7]'>
        <h1 className='text-[16px] font-semibold ml-4' >Free Delivery</h1>
        <p className='text-[13px] ml-4'>Applies to orders of ₹ 14 000.00 or more.   
             <span className='underline font-semibold'> View details </span></p>
        </div>
        <h1 className='text-[22px] font-medium'>Bag</h1>
        <div className='w-[717.23px] h-[436px]'>
            <Image src={layout} alt='image' width={717.23} height={62}/>

        </div>
      </div>

      {/* Right Section with bg-stone-800 */}
      <div className="w-[350px] h-[547px] ">
       <h1 className='text-[22px] mt-2 text-black font-semibold'>Summary</h1>
       <div className="flex justify-between">
            <p className='text-[15px] text-black'>Subtotal</p>
            <p className='text-[15px] text-black'>₹ 20 890.00</p>
          </div>

          {/* Delivery/Shipping */}
          <div className="flex justify-between mt-2">
            <p className='text-[15px] text-black'>Estimated Delivery and Handling</p>
            <p className='text-[15px] text-black'>Free</p>
          </div>

           {/* Total */}
           <div className="flex justify-between border-t-2 border-b-2 border-[#f5f5f5] mt-2">
            <p className='text-[14px] text-black font-semibold mt-2'>Total</p>
            <p className='text-[15px]  text-black font-semibold mt-2 mb-4'>₹ 20 890.00</p>
          </div>
           <div className='w-[334.67px] h-[60px] mt-8 '>
          <button className='bg-black text-[#FFFFFF] pl-[100.88px] pr-[100.8px] pt-[18px] pb-[18px] rounded-full'>Member Checkout</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )}
