/* eslint-disable @next/next/no-img-element */
import { PT_Sans, Sofia_Sans } from "next/font/google";
import { useState } from "react";
import { CiRuler } from "react-icons/ci";
import ShoeSizeVariantGrid from "~/components/ShoeSizeVariantGrid";
import ProductReviews from "~/components/ProductComponets/ProductReviews";
import ProductDescription from "~/components/ProductComponets/ProductDescription";
import ProductDetails from "~/components/ProductComponets/ProductDetails";
import SizeGuide from "~/components/ProductComponets/SizeGuide";
import { api } from "~/utils/api";
import { ProductImageCarousel } from "~/components/ProductComponets/ProductImageCarousel";
import ProductScreenLoadingSkeleton from "~/components/Skeletons/ProductScreenLoadingSkeleton";
import type { NextPageContext } from "next";
import Error404Page from "~/components/Error404Page";

interface pageProps {
  productId: string;
}

const Page: React.FC<pageProps> = (props) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);

  const handleClickSizeGuide = () => {
    setShowSizeGuide((prev) => !prev);
  };
  const { productId } = props;
  console.log(productId);
  const { data, isLoading } = api.products.getProductById.useQuery({
    productId: productId,
  });

  // console.log(data);
  // const isLoadingg = true;
  if (isLoading) return <ProductScreenLoadingSkeleton />;

  if (!data) return <Error404Page />;

  return (
    <div className="relative flex  w-full flex-col items-center">
      <div
        className={`${ptSans.variable} font-PT-sans flex w-full flex-col items-start pl-5`}
      >
        <div className="py-2">
          <h3 className={`font-PT-sans text-xl font-semibold`}>
            {data?.title}
          </h3>
          <p className="font-semibold text-gray-600">{data?.category}</p>
        </div>
        <p className="pb-2 font-semibold">${data?.price}</p>
      </div>

      <ProductImageCarousel images={data.imageURLs} />

      <div className="w-full p-5">
        <p className={`${ptSans.variable} font-PT-sans`}>
          {data?.variants.length} colors available
        </p>
        <div className="flex w-full items-start ">
          {data?.variants.map((variant, key) => (
            <div key={key} className="ml-2 h-14 w-14 bg-gray-400 first:ml-0 " />
          ))}
        </div>
      </div>
      <ShoeSizeVariantGrid
        sizes={data.shoeSizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <div className="flex w-full items-start py-4 pl-4">
        <CiRuler className="h-6 w-6" />
        <button
          type="button"
          className={`${ptSans.variable} font-PT-sans font-light`}
          onClick={handleClickSizeGuide}
        >
          Size guide
        </button>
      </div>
      <div>
        <button
          className="m-2 flex h-10 w-36 items-center justify-center rounded-full bg-black hover:cursor-pointer"
          type="button"
          disabled={!selectedSize}
          onClick={() => console.log("button works")}
        >
          <p
            className={` ${sofia.variable} font-sofia font-semibold text-white`}
          >
            {!selectedSize ? "SELECT SIZE" : "ADD TO CART"}
          </p>
        </button>
      </div>
      <div className="w-full pt-5">
        <ProductReviews />
        <ProductDescription description={data.description} />
        <ProductDetails details={data.details} />
      </div>
      <SizeGuide
        showSizeGuide={showSizeGuide}
        handleClickSizeGuide={handleClickSizeGuide}
      />
    </div>
  );
};

export default Page;

export function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  const productId = query.id?.[0];
  return {
    props: {
      productId,
    },
  };
}

const sofia = Sofia_Sans({
  variable: "--font-sofia",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSans = PT_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});
