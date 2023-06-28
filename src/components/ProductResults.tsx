import { productData } from "productData";
import React from "react";
import ProductCard from "./ProductCard";

const ProductResults = () => {
  return (
    <div
      id="featured-products-section"
      className="grid w-full grid-cols-2 place-items-center sm:grid-cols-3 "
    >
      {productData.map((product, key) => (
        <ProductCard
          key={`${key}-${product.title}`}
          title={product.title}
          category={product.category}
          images={product.images}
          variants={product.variants}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductResults;
