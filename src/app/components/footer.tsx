import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-100 to-gray-100 text-black py-8 px-6 w-full">
            {/* Main Frame with Gradient Background */}
            <div className="bg-gradient-to-r  from-gray-100 to-gray-100 w-full h-[213px] mx-auto">
                {/* Column 1: FIND A STORE */}
                <div className="w-[1372px] h-[213px] mx-auto flex space-x-6 py-4">
                    <div className="w-[245.5px]">
                        <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Become Link Member</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Sign Up for Email</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Student Discounts</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: GET HELP */}
                    <div className="w-[245.5px]">
                        <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Order Status</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Delivery</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Returns</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Payment Options</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Contact Us on Nike.com</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Contact Us on All Other Inquiries</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: ABOUT NIKE */}
                    <div className="w-[245.5px]">
                        <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline hover:text-blue-300">News</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Careers</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Investors</Link></li>
                            <li><Link href="#" className="hover:underline hover:text-blue-300">Sustainability</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Social Media Icons */}
                    <div className="absolute left-[1063px] my-[5px] h-[37px] w-[337px] flex justify-start items-center gap-4 transform translate-y-[-10px]">
                        <FaTwitter className="text-lg cursor-pointer hover:text-blue-300" />
                        <FaFacebook className="text-lg cursor-pointer hover:text-blue-300" />
                        <FaYoutube className="text-lg cursor-pointer hover:text-blue-300" />
                        <FaInstagram className="text-lg cursor-pointer hover:text-blue-300" />
                    </div>
                </div>
            </div>

            {/* Bottom Section with Links */}
            <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-balck-400">
                {/* Country and Copyright */}
                <div className="flex mb-4 md:mb-0 gap-2">
                    <IoLocationOutline className="text-lg" />
                    <p>India</p>
                    <p>© 2023 Nike, Inc. All Rights Reserved</p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                    <Link href="#" className="hover:underline hover:text-blue-300">Guides</Link>
                    <Link href="#" className="hover:underline hover:text-blue-300">Terms of Sale</Link>
                    <Link href="#" className="hover:underline hover:text-blue-300">Terms of Use</Link>
                    <Link href="#" className="hover:underline hover:text-blue-300">Nike Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}
