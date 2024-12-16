import Link from 'next/link'
import Frame from "../../../public/Frame.png"
import Vector from "../../../public/vector.png"
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa"
import Image from 'next/image'

export default function Navbar() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-myWhite flex justify-between items-center px-4 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        <Image src={Frame} alt={"image&amp;apos;"} width={24} height={24} 
        className='m-8'/>
        
        <div className="flex md:gap-4 sm:gap-3 gap-2 text-gray-400">
          <Link href="/">Find Link Store <span>| </span></Link>
          <Link href="/" className="text-black">Help <span>| </span></Link>
          <Link href="/contact" className="text-black">Join Us <span>| </span></Link>
          <Link href="/login" className="text-black">Sign In</Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-4 py-4 md:px-10">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Image src={Vector} alt={"image&amp;apos;"} className="md:w-[45px] sm:w-[40px] w-[30px]" />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="hidden md:flex gap-4 md:gap-6 font-medium md:text-[16px] sm:text-[14px] text-[10px]">
          <Link href="/new" className="hover:text-black whitespace-nowrap">New & Featured</Link>
          <Link href="/cart" className="hover:text-black whitespace-nowrap">Men</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
          <Link href="/products" className="hover:text-black whitespace-nowrap">Sale</Link>
          <Link href="/checkout" className="hover:text-black whitespace-nowrap">SNKRS</Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>
      </div>

      {/* Mobile Info Section */}
      <div className="w-full h-[44px] bg-myWhite flex flex-col justify-center items-center">
        {/* Child 1: Contains some content */}
        <div className="w-[105.17px] h-[17px] flex justify-center items-center">
          <p className='flex justify-center text-black text-sm font-bold items-center'>Hello Nike App</p>
        </div>

        <div className="w-full h-[24px] flex flex-col items-center justify-center">
          {/* Flex container for horizontal alignment */}
          <div className="flex items-center justify-center space-x-2">
            {/* Download the app text */}
            <p className="text-sm">
              Download the app to access everything Nike.
            </p>

            {/* Get Your Great link */}
            <p className="underline text-xs font-semibold cursor-pointer">
              Get Your Great
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
