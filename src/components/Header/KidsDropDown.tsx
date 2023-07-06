import { AnimatePresence, motion } from "framer-motion";
import { PT_Sans, Sofia_Sans } from "next/font/google";
import type { FC } from "react";

interface KidsDropDownProps {
  isKidsOpen: boolean;
  setIsKidsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const KidsDropDown: FC<KidsDropDownProps> = ({ isKidsOpen, setIsKidsOpen }) => {
  const handleMenuMouseEnter = () => {
    setIsKidsOpen(true);
  };

  const handleMenuMouseLeave = () => {
    setIsKidsOpen(false);
  };
  return (
    <div className="hidden sm:flex">
      {isKidsOpen && (
        <div className="fixed inset-0 top-14 h-full w-full bg-black bg-opacity-20 backdrop-blur-sm" />
      )}
      <AnimatePresence>
        {isKidsOpen && (
          <motion.div
            className="fixed left-0 top-14 z-10 w-full bg-white shadow-lg"
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{ opacity: 1, height: "auto", overflow: "visible" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.3 }}
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
          >
            <div
              onMouseLeave={handleMenuMouseLeave}
              className="flex items-center justify-center bg-white py-5"
            >
              <div className="grid max-w-3xl grid-cols-3 justify-center ">
                <div className="pr-4">
                  <p
                    className={`${sofia.variable} mt-5 font-sofia text-lg font-medium`}
                  >
                    All Shoes
                  </p>
                  <ul className={`${ptSans.variable} font-PT-sans text-base`}>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Lifestyle
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Air Jordan
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Air Max
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Air Force 1
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Dunks and Blazers
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Running
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Soccer
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Golf
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      SB
                    </li>
                    <li className="py-1 pb-2 text-gray-500 duration-150 ease-in-out hover:text-black">
                      Slides
                    </li>
                  </ul>
                </div>

                <div className="px-4">
                  <p className={`${sofia.variable} mt-5 font-sofia text-lg`}>
                    All Clothing
                  </p>
                  <ul className={`${ptSans.variable} font-PT-sans text-base`}>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Tops & T-Shirts
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Hoodies & Sweatshirts
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Pants
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Shorts
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Jackets & Vests
                    </li>
                  </ul>
                </div>
                <div className="px-4">
                  <p className={`${sofia.variable} mt-5 font-sofia text-lg`}>
                    All Clothing
                  </p>
                  <ul className={`${ptSans.variable} font-PT-sans text-base`}>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Tops & T-Shirts
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Hoodies & Sweatshirts
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Pants
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Shorts
                    </li>
                    <li className="py-1 text-gray-500 duration-150 ease-in-out hover:cursor-pointer hover:text-black">
                      Jackets & Vests
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KidsDropDown;

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-PT-sans",
});
