import Image from 'next/image'
import React from 'react'
import nav from "../../../public/nav.png"
import side from "../../../public/side.png"
import Rectangle from "../../../public/Rectangle.png"
import Rectangle1 from "../../../public/Rectangle1.png"
import Rectangle2 from "../../../public/Rectangle2.png"
import frame11 from "../../../public/frame11.png"

export default function Products() {
  return (
    <div className='w-[1440px] h-auto'>
  {/* Navigation Bar */}
  <div className='w-full h-[50px]'>
    <Image src={nav} alt='image' width={1250} height={50} />
  </div>

  {/* Side Image and Columns side by side */}
  <div className='w-full h-auto flex'>
    {/* Side Image */}
    <div className='w-[260px] h-[848px]'>
      <Image src={side} alt='image' width={260} height={849} />
    </div>

    {/* Columns Section */}
    <div className="w-[1092px] h-auto flex flex-wrap gap-4"> {/* Added flex-wrap and gap-4 for spacing */}

      {/* Column 1 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Mid 07</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 10 795.00</p>
        </div>
      </div>

      {/* Column 2 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle1} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Court Vision Low Next Nature</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 4 995.00</p>
        </div>
      </div>

      {/* Column 3 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle2} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Platform</p>
          <p className="text-[#757575]">Womens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 8 985.00</p>
        </div>
      </div>

      {/* Column 4 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Mid 07</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 10 795.00</p>
        </div>
      </div>

      {/* Column 5 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle1} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Court Vision Low Next Nature</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 4 995.00</p>
        </div>
      </div>

      {/* Column 6 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle2} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Platform</p>
          <p className="text-[#757575]">Womens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 8 985.00</p>
        </div>
      </div>

      {/* Column 7 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Mid 07</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 10 795.00</p>
        </div>
      </div>

      {/* Column 8 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle1} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Court Vision Low Next Nature</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 4 995.00</p>
        </div>
      </div>

      {/* Column 9 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle2} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Platform</p>
          <p className="text-[#757575]">Womens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 8 985.00</p>
        </div>
      </div>

      {/* Column 10 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Mid 07</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 10 795.00</p>
        </div>
      </div>

      {/* Column 11 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle1} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Court Vision Low Next Nature</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 4 995.00</p>
        </div>
      </div>

      {/* Column 12 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle2} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Platform</p>
          <p className="text-[#757575]">Womens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 8 985.00</p>
        </div>
      </div>

      {/* Column 13 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Mid 07</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 10 795.00</p>
        </div>
      </div>

      {/* Column 14 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle1} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Court Vision Low Next Nature</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 4 995.00</p>
        </div>
      </div>

      {/* Column 15 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle2} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Platform</p>
          <p className="text-[#757575]">Womens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 8 985.00</p>
        </div>
      </div>

    </div>
   
  </div>
  <div className='w-[1092px] h-[259px] ml-60'>
    <Image src={frame11} alt='image' width={987} height={259}/>

  </div>
</div>
  )}