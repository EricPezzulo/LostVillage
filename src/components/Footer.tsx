import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const Footer = () => {
  return (
    <div
      className={`${ptSans.variable} font-PT-sans flex flex-col items-center justify-center bg-gray-100 pb-2 pt-2`}
    >

      <div className="">
        <p className="pb-3 text-sm text-center text-gray-700">Check out our socials</p>
        <div className="flex w-full items-center justify-center mb-2">
          <BsFacebook className="mx-4 h-6 w-6 text-gray-700" />
          <BsTwitter className="mx-4 h-6 w-6 text-gray-700" />
          <TfiYoutube className="mx-4 h-6 w-6 text-gray-700" />
          <ImInstagram className="mr-4 h-6 w-6 text-gray-700" />
        </div>
      </div>
   
      <p className="text-xs text-gray-700">
        © 2023 LostVillage, Inc. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
