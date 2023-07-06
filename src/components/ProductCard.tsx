/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

interface ProductCardProps {
  title: string;
  subCategory: string;
  variants: Variants[];
  price: number;
  productId: string;
}
interface Variants {
  id: string;
  productId: string;
  color: string;
  images: string[];
}
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  subCategory,
  variants,
  price,
  productId,
}) => {
  return (
    <div className="mx-1 h-full w-full rounded p-2 sm:max-w-[250px]">
      <Link href={`/products/${productId}`}>
        <div className="flex flex-col">
          <img
            className="h-56 w-full object-contain"
            src={variants?.[0]?.images?.[0]}
            alt={title}
          />
          <p className="pt-1 text-base">{title}</p>
          <p className="text-sm text-gray-600">{subCategory}</p>
          {/* <p className="text-sm text-gray-600">{variants}</p> */}
          <p className="text-sm">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
