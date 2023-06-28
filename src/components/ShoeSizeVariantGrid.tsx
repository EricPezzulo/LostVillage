import React from "react";
import ShoeSizeVariant from "./ShoeSizeVariant";
import { PT_Sans } from "next/font/google";

interface ShowSizeVariantGirdProps {
  selectedSize?: string | null;
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
}) => {
  return (
    <div className={`${ptSans.variable} font-PT-sans`}>
      <p className="text-lg font-semibold">Sizes</p>
      <div className="grid grid-cols-3 gap-2">
        <ShoeSizeVariant
          setSelectedSize={setSelectedSize}
          selectedSize={selectedSize}
          men={7}
          women={8.5}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={7.5}
          women={9}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={8}
          women={9.5}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={8.5}
          women={10}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={9}
          women={10.5}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={9.5}
          women={11}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={10}
          women={11.5}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={10.5}
          women={12}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={11}
          women={12.5}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={11.5}
          women={13}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={12}
          women={13.5}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={12.5}
          women={14}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={13}
          women={14.5}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={13.5}
          women={15}
        />
        <ShoeSizeVariant
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          men={14}
          women={15.5}
        />
      </div>
    </div>
  );
};

export default ShoeSizeVariantGrid;
