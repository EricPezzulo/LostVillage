import type { FC } from "react";
import ProductCard from "./ProductCard";
import { api } from "~/utils/api";

interface ProductsProps {
  products: Product[];
}
interface Product {
  category: string;
  clothingSizes?: string[] | undefined;
  createdAt: Date;
  description: string;
  details: string[];
  id: string;
  price: number;
  productId: string;
  shoeSizes?: number[] | undefined;
  subCategory: string;
  title: string | null;
  updatedAt: Date;
  variants: Variants[];
}
interface Variants {
  id: string;
  productId: string;
  color: string;
  images: string[];
}

const ProductResults: FC<ProductsProps> = ({ products }) => {
  return (
    <div
      id="featured-products-section"
      className="grid w-full grid-cols-2 place-items-center sm:grid-cols-3 "
    >
      {products?.map((product, key) => (
        <ProductCard
          key={`${key}-${product.title || "unknown"}`}
          title={product?.title || "Unknown"}
          subCategory={product?.subCategory}
          variants={product.variants}
          price={product?.price}
          productId={product?.productId}
        />
      ))}
    </div>
  );
};

export default ProductResults;
