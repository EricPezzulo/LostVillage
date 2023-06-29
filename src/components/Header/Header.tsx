import { BsHandbag } from "react-icons/bs";
import { HiBars4 } from "react-icons/hi2";
import { Sofia_Sans } from "next/font/google";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AiOutlineUser } from "react-icons/ai";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header className="justif relative flex h-14 w-full items-center justify-between bg-white px-5">
      <button
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label="Menu button"
      >
        <HiBars4 className="h-6 w-6" />
      </button>

      <Link href="/">
        <h1 className={`${sofia.variable} font-sofia text-2xl font-semibold`}>
          LostVillage
        </h1>
      </Link>
      <div className="flex items-center">
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

        <BsHandbag className="ml-2 h-7 w-7" />
      </div>

      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Header;
