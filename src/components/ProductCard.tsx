/* eslint-disable @next/next/no-img-element */
"use client";
interface ProductCardProps {
  images: { id?: number; url?: string }[];
  title: string;
  category: string;
  variants: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  title,
  category,
  variants,
  price,
}) => {
  return (
    <div className="mx-1 h-full w-full rounded p-2 sm:max-w-[250px]">
      <div className="flex flex-col">
        <img className="object-cover" src={images[0]?.url} alt={title} />
        <p className="pt-1 text-base">{title}</p>
        <p className="text-sm text-gray-600">{category}</p>
        <p className="text-sm text-gray-600">{variants}</p>
        <p className="text-sm">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
