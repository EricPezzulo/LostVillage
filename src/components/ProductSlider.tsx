import { productData } from "productData";
import FeaturedProductCard from "./FeaturedProductCard";
import classNames from "classnames";
import { useState } from "react";
import { PT_Sans, Sofia_Sans } from "next/font/google";

const ProductSlider = () => {
  const [selectedTitle, setSelectedTitle] = useState<string>("New Arrivals");
  return (
    <div className="py-4">
      <div className="flex w-full items-center ">
        <div className="relative flex w-full items-center">
          <div
            className={`${sofia.variable} scroll flex h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap font-sofia  scrollbar-hide`}
          >
            <button
              type="button"
              onClick={() => setSelectedTitle("New Arrivals")}
              className={classNames(
                selectedTitle === "New Arrivals"
                  ? "text-black"
                  : "text-gray-400",
                "mx-2 whitespace-nowrap pl-4 text-xl font-semibold  duration-150 ease-in-out"
              )}
            >
              New Arrivals
            </button>
            <button
              type="button"
              onClick={() => setSelectedTitle("What's Trending")}
              className={classNames(
                selectedTitle === "What's Trending"
                  ? "text-black"
                  : "text-gray-400",
                "mx-2 whitespace-nowrap pl-4 text-xl font-semibold  duration-150 ease-in-out"
              )}
            >
              What&apos;s Trending
            </button>
            <button
              type="button"
              onClick={() => setSelectedTitle("Member Exlusives")}
              className={classNames(
                selectedTitle === "Member Exlusives"
                  ? "text-black"
                  : "text-gray-400",
                "mx-2 whitespace-nowrap pl-4 text-xl font-semibold  duration-150 ease-in-out"
              )}
            >
              Member Exclusives
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${ptSans.variable} relative mt-2 flex w-full items-center  font-PT-sans`}
      >
        <div
          id="slider"
          className="scroll flex h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap  scrollbar-hide"
        >
          {productData.map((product, key) => (
            <FeaturedProductCard
              key={key}
              image={product.images[0]?.url}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});
const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});
