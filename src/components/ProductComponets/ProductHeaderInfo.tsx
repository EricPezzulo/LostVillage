import { PT_Sans } from "next/font/google";
import React from "react";

interface DataProps {
  title: string | null;
  subCategory: string;
  price: number;
}

const ProductHeaderInfo: React.FC<DataProps> = ({
  title,
  subCategory,
  price,
}) => {
  return (
    <div className="flex w-full flex-col sm:whitespace-nowrap">
      <div
        className={`${ptSans.variable} flex w-full flex-col items-start pl-5 font-PT-sans sm:pl-0`}
      >
        <div className="py-2">
          <h3
            className={`whitespace-normal font-PT-sans text-xl font-semibold sm:text-2xl`}
          >
            {title}
          </h3>
          <p className="font-semibold text-gray-600">{subCategory}</p>
        </div>
        <p className="pb-2 font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default ProductHeaderInfo;

const ptSans = PT_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});
