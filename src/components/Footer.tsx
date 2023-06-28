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
      className={`${ptSans.variable} font-PT-sans flex flex-col items-center justify-center bg-gray-100 pb-2 pt-5`}
    >
      <div className="flex w-full items-center justify-evenly text-center text-sm text-gray-700">
        <div className="flex flex-col items-start sm:flex-row">
          <p className="pb-2">Cookie Settings</p>
          <p className="">Data Settings</p>
        </div>
        <div className="flex flex-col items-start sm:flex-row">
          <p className="pb-2">Privacy Policy</p>
          <p className="">Terms and Conditions</p>
        </div>
      </div>
      <div className="py-3">
        {/* <p className=" text-sm text-gray-700">Check out our socials</p> */}
        <div className="flex w-full items-center justify-center py-3">
          <BsFacebook className="mx-4 h-7 w-7 text-gray-700" />
          <BsTwitter className="mx-4 h-7 w-7 text-gray-700" />
          <TfiYoutube className="mx-4 h-7 w-7 text-gray-700" />
          <ImInstagram className="mr-4 h-7 w-7 text-gray-700" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center pb-2">
        <FaLocationDot className="text-gray-700" />
        <p className="text-bottom ml-3 flex h-fit align-bottom text-sm text-gray-700">
          United States
        </p>
      </div>
      <p className="mb-3 mt-2 text-xs text-gray-700">
        © 2023 LostVillage, Inc. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
