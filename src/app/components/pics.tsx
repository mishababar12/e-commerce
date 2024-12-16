import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from 'next/image';
import one from "../../../public/one.png";
import two from "../../../public/two.png";
import three from "../../../public/three.png";

export default function Pic() {
  return (
    <>
      <div className="w-full bg-myWhite flex justify-center items-start lg:mb-32 md:mb-32">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[80%] h-[52px] flex justify-between items-center">
          {/* Left div - Shop */}
          <div className="w-auto h-[27px] font-medium text-black lg:mt-56 md:mt-56 lg:-ml-10 md:-ml-10">
            Best of Air Max
          </div>

          {/* Right div - Shop Buttons */}
          <div className="w-auto h-[27px] font-medium text-black flex items-center pr-[12px] gap-2 lg:mt-56 md:mt-56 ">
            Shop
            <div className='flex gap-2'>
              <div className='w-[46px] h-[46px] bg-gray-100 rounded-full flex justify-center items-center cursor-pointer'>
                <IoIosArrowBack className='text-black' />
              </div>
              <div className='w-[46px] h-[46px] bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'>
                <IoIosArrowForward className='text-black' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section - Responsive Flex Layout */}
      <div className="w-full sm:w-[90%] md:w-[90%] lg:w-[95%] h-full bg-myWhite gap-9 px-4 sm:px-6 md:px-12 flex justify-between items-start">
        {/* First Div */}
        <div className="w-full sm:w-[320px] md:w-[340px] lg:w-[340px] h-[510.36px] sm:mb-0">
          <div className="w-full h-[441.36px]">
            <Image src={one} alt={"image&amp;apos;"} width={1344} height={700} className="object-cover" />
            <div className='lg:mt-8 md:mt-8'>
           
          <p className='text-black text-sm font-semibold'>Nike Air Max Pulse</p>
              <p className='text-gray-500 '>Women Shoes</p>
              <p>1399</p>
              
              </div>
          
              
          </div>
         
        </div>
       

        {/* Second Div */}
        <div className="w-full sm:w-[320px] md:w-[340px] lg:w-[340px] h-[510.36px] mb-7 sm:mb-0">
          <div className="w-full h-[441.36px]">
            <Image src={two} alt={"image&amp;apos;"} width={1344} height={700} className="object-cover" />
          
            <div className='lg:mt-8 md:mt-8'>
          <p className='text-black text-sm font-semibold'>Nike Air Max Pulse</p>
              <p className='text-gray-500 '>Men Shoes</p>
              <div>1399</div>
              
              </div>
            
          </div>
        </div>

        {/* Third Div */}
        <div className="w-full sm:w-[320px] md:w-[340px] lg:w-[340px] h-[510.36px] mb-7 sm:mb-0">
          <div className="w-full h-[441.36px]">
            <Image src={three} alt={"image&amp;apos;"} width={1344} height={700} className="object-cover" />
          
            <div className='lg:mt-8 md:mt-8'>
          <p className='text-black text-sm font-semibold'>Nike Air Max Pulse 97 SE</p>
              <p className='text-gray-500 '>Men Shoes</p>
              <p>1699</p>
              </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
