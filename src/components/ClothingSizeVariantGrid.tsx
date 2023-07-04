import { PT_Sans } from "next/font/google";
import { FC } from "react";
import ClothingSizeVariant from "./ClothingSizeVariant";

interface ClothingSizeVariantGirdProps {
  selectedSize?: string | null;
  sizes: string[];
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}
const ClothingSizeVariantGrid: FC<ClothingSizeVariantGirdProps> = ({
  setSelectedSize,
  selectedSize,
  sizes,
}) => {
  return (
    <div className="flex w-full items-center px-5 sm:ml-0 sm:px-0">
      <div className={`${ptSans.variable} w-full sm:w-fit `}>
        <p className="text-lg font-semibold">Sizes</p>
        <div className="grid w-full grid-cols-3 gap-2  sm:grid-cols-2 md:grid-cols-3">
          {sizes.map((size, key) => (
            <ClothingSizeVariant
              size={size}
              key={key}
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
            />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default ClothingSizeVariantGrid;

const ptSans = PT_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});
