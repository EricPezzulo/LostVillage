import { type FC } from "react";
import ProductCard from "./ProductCard";

interface ProductsProps {
  products: Product[];
}

interface Product {
  id: string;
  productId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  details: string[];
  variants: Variants[];
  clothingSizes: string[];
  shoeSizes: number[];
  price: number;
  category: string;
  subCategory: string;
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
      className="grid w-full grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 "
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
