"use client";
import { AnimatePresence, motion } from "framer-motion";
import { PT_Sans, Sofia_Sans } from "next/font/google";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import useDisableScroll from "~/hooks/useDisableScroll";
interface MenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});
const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const MobileMenu: React.FC<MenuProps> = ({ showMenu, setShowMenu }) => {
  useDisableScroll({ showMenu });
  const router = useRouter();
  const goToMens = () => {
    router
      .push("/mens-clothing")
      .then(() => setShowMenu(false))
      .catch((error) => console.error("error", error));
  };
  const goToHome = () => {
    router
      .push("/")
      .then(() => setShowMenu(false))
      .catch((error) => console.error("error", error));
  };
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          className="absolute inset-0 z-10 flex min-h-screen w-screen flex-col items-center bg-white sm:hidden"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          exit={{ x: -500 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex w-full items-center justify-between border border-b p-5 pb-3">
            <button type="button" onClick={goToHome}>
              <p className={`${sofia.variable} font-sofia text-2xl font-bold`}>
                LostVillage
              </p>
            </button>
            <button type="button" onClick={() => setShowMenu(false)}>
              <IoCloseOutline className="h-8 w-8" />
            </button>
          </div>
          <div className="flex h-full w-full flex-col ">
            <div className="flex w-full flex-col items-start justify-between">
              <ul className={`${sofia.variable} font-sofia w-full border-b`}>
                <button className="w-full" type="button" onClick={goToMens}>
                  <li className="flex items-center justify-between p-3 px-5 duration-100 ease-in-out hover:cursor-pointer hover:bg-gray-100">
                    <p className="text-2xl font-semibold ">Men</p>
                    <AiOutlineRight className="h-5 w-5" />
                  </li>
                </button>
                <li className="flex items-center justify-between p-3 px-5 duration-100 ease-in-out hover:cursor-pointer hover:bg-gray-100">
                  <p className="text-2xl font-semibold ">Women</p>{" "}
                  <AiOutlineRight className="h-5 w-5" />
                </li>
                <li className="flex items-center justify-between p-3 px-5 duration-100 ease-in-out hover:cursor-pointer hover:bg-gray-100">
                  <p className="text-2xl font-semibold">Kids</p>{" "}
                  <AiOutlineRight className="h-5 w-5" />
                </li>
                <li className="flex items-center justify-between p-3 px-5 duration-100 ease-in-out hover:cursor-pointer hover:bg-gray-100">
                  <p className="text-2xl font-light ">Sale</p>{" "}
                  <AiOutlineRight className="h-5 w-5" />
                </li>
              </ul>
              <div className="flex w-full flex-col items-start justify-between">
                <ul className={`${ptSans.variable} font-PT-sans w-full`}>
                  <li className="flex items-center justify-between p-3 pl-5">
                    <p className="text-lg">My Account</p>
                  </li>
                  <li className="flex items-center justify-between p-3 pl-5">
                    <p className="text-lg">Exchanges & Returns</p>
                  </li>
                  <li className="flex items-center justify-between p-3 pl-5">
                    <p className="text-lg">Order Tracker</p>
                  </li>
                  <li className="flex items-center justify-between p-3 pl-5">
                    <p className="text-lg">LostVillage VIP Club</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
