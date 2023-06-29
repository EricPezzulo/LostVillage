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
  console.log(sizes);
  return (
    <div className={`${ptSans.variable} font-PT-sans`}>
      <p className="text-lg font-semibold">Sizes</p>
      <div className="grid grid-cols-3 gap-2">
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
    </div>
  );
};

export default ShoeSizeVariantGrid;
