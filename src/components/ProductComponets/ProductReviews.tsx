import { AnimatePresence, motion } from "framer-motion";
import { PT_Sans } from "next/font/google";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import StarRating from "./StarRating";

const ptSans = PT_Sans({
  variable: "--font-PT-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ProductReviews = () => {
  const [showReviews, setShowReviews] = useState<boolean>(false);
  const handleShowReviews = () => {
    setShowReviews((prev) => !prev);
  };
  return (
    <button
      type="button"
      className="flex w-full flex-col items-center justify-between border-t"
      onClick={handleShowReviews}
    >
      <div className="flex w-full items-center justify-between py-5">
        <div className="flex items-center pl-5">
          <h4 className={`${ptSans.variable} font-PT-sans font-semibold`}>
            Reviews (2)
          </h4>
        </div>

        <div className="flex items-center pr-5">
          <StarRating starColor="text-sky-500" totalStars={5} rating={4} />
          <AnimatePresence>
            <motion.div
              initial={false}
              animate={{ rotate: showReviews ? -180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <BiChevronDown className="h-7 w-7" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {showReviews && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", position: "relative" }}
          >
            <div>
              <div
                className={`${ptSans.variable} border-b px-5 py-4 text-left font-PT-sans`}
              >
                <p className="font-semibold">Amazing sneakers!</p>
                <StarRating starColor="text-black" totalStars={5} rating={5} />
                <p>
                  Iure eligendi totam nemo ipsa ad illum voluptates provident,
                  quam sunt esse ducimus assumenda, a at vel dolore! Fugiat
                  porro recusandae esse.
                </p>
                <div className="pt-3">
                  <p className="text-sm text-gray-500">Jack | June 12, 2023 </p>
                </div>
              </div>
              <div
                className={`${ptSans.variable} px-5 py-4 text-left font-PT-sans`}
              >
                <p className="font-semibold">Best shoe ever made</p>
                <StarRating starColor="text-black" totalStars={5} rating={5} />
                <p>
                  Iure eligendi totam nemo ipsa ad illum voluptates provident,
                  quam sunt esse ducimus assumenda, a at vel dolore! Fugiat
                  porro recusandae esse.
                </p>
                <div className="pt-3">
                  <p className="text-sm text-gray-500">Jack | June 12, 2023 </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ProductReviews;
