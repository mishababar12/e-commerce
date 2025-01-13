import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 text-black py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
          <FaFacebook className="text-xl cursor-pointer hover:text-blue-400" />
          <FaYoutube className="text-xl cursor-pointer hover:text-blue-400" />
          <FaInstagram className="text-xl cursor-pointer hover:text-blue-400" />
        </div>

        {/* Bottom Section */}
        <div className="mt-4 text-center md:text-left">
          <p className="text-xs text-black">© 2023 Fashion, Inc. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

