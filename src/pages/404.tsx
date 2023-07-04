import { Sofia_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Custom404 = () => {
  return (
    <div
      className={`${sofia.variable} flex h-full grow flex-col items-center justify-center font-sofia`}
    >
      <div className="">
        <motion.p
          initial="initial"
          animate="animate"
          variants={animationVariants}
          className="text-[100px] font-bold text-black"
        >
          404
        </motion.p>
      </div>

      <p className="text-xl text-gray-800">Something went wrong</p>
      <p>this page does not exist</p>
      <div className="mt-5">
        <Link href="/">
          <button
            type="button"
            className="h-10 w-36 rounded-md bg-black text-lg text-white"
          >
            Return Home
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Custom404;

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});

const animationVariants = {
  initial: { scale: 0 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
