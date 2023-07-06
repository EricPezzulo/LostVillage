import { BsHandbag } from "react-icons/bs";
import { HiBars4 } from "react-icons/hi2";
import { Sofia_Sans } from "next/font/google";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import MensDropDown from "./MensDropDown";
import WomensDropDown from "./WomensDropDown";
import KidsDropDown from "./KidsDropDown";
import ShoppingCartModal from "../elements/ShoppingCart/ShoppingCartModal";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isWomenOpen, setIsWomenOpen] = useState<boolean>(false);
  const [isKidsOpen, setIsKidsOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const handleHover = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleWomenHover = () => {
    setIsWomenOpen(true);
  };
  const handleWomenMouseLeave = () => {
    setIsWomenOpen(false);
  };
  const handleKidsHover = () => {
    setIsKidsOpen(true);
  };
  const handleKidsMouseLeave = () => {
    setIsKidsOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between bg-white px-5">
      <div className="flex w-full items-center ">
        <button
          type="button"
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label="Menu button"
          className="mr-3 sm:hidden"
        >
          <HiBars4 className="h-6 w-6" />
        </button>
        <Link href="/">
          <h1 className={`${sofia.variable} font-sofia text-2xl font-semibold`}>
            LostVillage
          </h1>
        </Link>
      </div>

      <div className="hidden sm:flex sm:w-full sm:justify-center ">
        <div
          className="relative flex h-14 cursor-pointer items-center justify-center px-5"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <p>Men</p>
          {isOpen && (
            <div className="absolute bottom-0 h-[3px] w-full bg-black" />
          )}
        </div>
        <div
          onMouseEnter={handleWomenHover}
          onMouseLeave={handleWomenMouseLeave}
          className="relative flex h-14 cursor-pointer items-center justify-center px-5 duration-150 ease-in-out hover:bg-gray-200"
        >
          <p>Women</p>
          {isWomenOpen && (
            <div className="absolute bottom-0 h-[3px] w-full bg-black" />
          )}
        </div>
        <div
          onMouseEnter={handleKidsHover}
          onMouseLeave={handleKidsMouseLeave}
          className="relative flex h-14 cursor-pointer items-center justify-center px-5 duration-150 ease-in-out hover:bg-gray-200"
        >
          <p>Kids</p>
          {isKidsOpen && (
            <div className="absolute bottom-0 h-[3px] w-full bg-black" />
          )}
        </div>
      </div>

      <div className="flex w-full items-center justify-end">
        <div className="mr-1 hidden items-center rounded-full border border-gray-400 p-1 sm:flex">
          <AiOutlineSearch className="mx-1 h-5 w-5 text-gray-700" />
          <input className="mx-1 w-32 outline-0 focus:outline focus:ring-0" />
        </div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button>
              <AiOutlineUser className="h-7 w-7" />
            </button>
          </SignInButton>
        </SignedOut>
        <button type="button" onClick={() => setIsCartOpen(true)}>
          <BsHandbag className="ml-2 h-7 w-7" />
        </button>
      </div>

      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />

      <MensDropDown isOpen={isOpen} setIsOpen={setIsOpen} />
      <WomensDropDown
        isWomenOpen={isWomenOpen}
        setIsWomenOpen={setIsWomenOpen}
      />
      <KidsDropDown isKidsOpen={isKidsOpen} setIsKidsOpen={setIsKidsOpen} />
      <ShoppingCartModal
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </header>
  );
};

export default Header;
const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});
