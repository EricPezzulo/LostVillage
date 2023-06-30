import React from "react";
import ShoeSizeVariant from "./ShoeSizeVariant";
import { PT_Sans } from "next/font/google";

interface ShowSizeVariantGirdProps {
  selectedSize?: string | null;
  sizes: number[];
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}
const ptSans = PT_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ShoeSizeVariantGrid: React.FC<ShowSizeVariantGirdProps> = ({
  selectedSize,
  setSelectedSize,
  sizes,
}) => {
  return (
    <div className="flex w-full items-center px-5 sm:ml-0 sm:px-0">
      <div className={`${ptSans.variable} w-full sm:w-fit `}>
        <p className="text-lg font-semibold">Sizes</p>
        <div className="grid w-full grid-cols-3 gap-2  sm:grid-cols-2 md:grid-cols-3">
          {sizes.map((size, key) => (
            <ShoeSizeVariant
              key={key}
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
              men={size}
              women={size + 1.5}
            />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default ShoeSizeVariantGrid;
