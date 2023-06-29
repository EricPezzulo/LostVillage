/* eslint-disable @next/next/no-img-element */
import { PT_Sans, Sofia_Sans } from "next/font/google";
import { useState } from "react";
import { CiRuler } from "react-icons/ci";
import ShoeSizeVariantGrid from "~/components/ShoeSizeVariantGrid";
import ProductReviews from "~/components/ProductComponets/ProductReviews";
import ProductDescription from "~/components/ProductComponets/ProductDescription";
import ProductDetails from "~/components/ProductComponets/ProductDetails";
import SizeGuide from "~/components/ProductComponets/SizeGuide";

const sofia = Sofia_Sans({
  variable: "--font-sofia",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSans = PT_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface pageProps {
  params: { product: string };
}
const Page: React.FC<pageProps> = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);

  const handleClickSizeGuide = () => {
    setShowSizeGuide((prev) => !prev);
  };

  return (
    <div className="relative flex  w-full flex-col items-center">
      <div
        className={`${ptSans.variable} font-PT-sans flex w-full flex-col items-start pl-5`}
      >
        <div className="py-2">
          <h3 className={`font-PT-sans text-xl font-semibold`}>
            Nike Air Jordan 1
          </h3>
          <p className="font-semibold text-gray-600">Men&apos;s Shoes</p>
        </div>
        <p className="pb-2 font-semibold">$120</p>
      </div>

      <div>
        <img
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf2e9611-78c8-47e8-b109-7cf5f66087f1/air-jordan-1-mid-mens-shoes-b3js2D.png"
          alt="test"
        />
      </div>
      <div className="w-full p-5">
        <p className={`${ptSans.variable} font-PT-sans`}>5 colors available</p>
        <div className="flex w-full items-start ">
          <div className="h-14 w-14 bg-gray-400" />
          <div className="ml-2 h-14 w-14 bg-gray-400" />
          <div className="ml-2 h-14 w-14 bg-gray-400" />
          <div className="ml-2 h-14 w-14 bg-gray-400" />
          <div className="ml-2 h-14 w-14 bg-gray-400" />
        </div>
      </div>
      <ShoeSizeVariantGrid
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <div className="flex w-full items-start py-4 pl-4">
        <CiRuler className="h-6 w-6" />
        <button
          type="button"
          className={`${ptSans.variable} font-PT-sans font-light`}
          onClick={handleClickSizeGuide}
        >
          Size guide
        </button>
      </div>
      <div>
        <button
          className="m-2 flex h-10 w-36 items-center justify-center rounded-full bg-black hover:cursor-pointer"
          type="button"
          disabled={!selectedSize}
          onClick={() => console.log("button works")}
        >
          <p
            className={` ${sofia.variable} font-sofia font-semibold text-white`}
          >
            {!selectedSize ? "SELECT SIZE" : "ADD TO CART"}
          </p>
        </button>
      </div>
      <div></div>
      <div className="w-full pt-5">
        <ProductReviews />
        <ProductDescription />
        <ProductDetails />
      </div>
      <SizeGuide
        showSizeGuide={showSizeGuide}
        handleClickSizeGuide={handleClickSizeGuide}
      />
    </div>
  );
};

export default Page;
