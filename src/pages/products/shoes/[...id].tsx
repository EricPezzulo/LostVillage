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
import type { GetServerSideProps, NextPage } from "next";
import Custom404 from "~/pages/404";
import ProductHeaderInfo from "~/components/ProductComponets/ProductHeaderInfo";
import { PrismaClient } from "@prisma/client";

interface pageProps {
  productId: string;
  product: {
    id: string;
    productId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    details: string[];
    imageURLs: string[];
    variants: string[];
    clothingSizes: string[]; // Or you can use a specific type for clothing sizes like 'ClothingSize[]'
    shoeSizes: number[]; // Or you can use a specific type for shoe sizes like 'ShoeSize[]'
    price: number;
    category: string;
  };
}

const Page: NextPage<pageProps> = ({ productId, product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);

  const handleClickSizeGuide = () => {
    setShowSizeGuide((prev) => !prev);
  };

  console.log(product);

  if (!product) return <Custom404 />;

  return (
    <div className="relative flex w-full max-w-7xl grow flex-col items-center bg-white sm:justify-center sm:self-center lg:py-5">
      <div className="flex w-full sm:hidden">
        <ProductHeaderInfo
          title={product?.title}
          category={product?.category}
          price={product?.price}
        />
      </div>
      <div className="flex w-full max-w-5xl flex-col justify-center  sm:flex-row">
        <ProductImageCarousel images={product?.imageURLs} />
        <div className=" sm:pl-5 lg:w-full">
          <div className="hidden sm:block">
            <ProductHeaderInfo
              title={product?.title}
              category={product?.category}
              price={product?.price}
            />
          </div>
          <div className="w-full p-5 sm:pl-0">
            <p className={`${ptSans.variable} font-PT-sans`}>
              {product?.variants?.length} colors available
            </p>
            <div className="flex w-full items-start ">
              {product?.variants?.map((variant, key) => (
                <div
                  key={key}
                  className="ml-2 h-14 w-14 bg-gray-400 first:ml-0 "
                />
              ))}
            </div>
          </div>
          <ShoeSizeVariantGrid
            sizes={product?.shoeSizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <div className="mt-4 hidden  sm:flex">
            <button
              className=" flex h-10 w-36 items-center justify-center rounded-full bg-black hover:cursor-pointer sm:inset-0 sm:flex "
              type="button"
              disabled={!selectedSize}
              onClick={() => console.log("button works")}
            >
              <p
                className={` ${sofia.variable} font-sofia font-semibold text-white`}
              >
                {!selectedSize ? "SELECT SIZE" : "ADD TO CART"}
              </p>
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="flex w-full  items-start py-4 pl-4 md:max-w-3xl lg:max-w-5xl">
        <CiRuler className="h-6 w-6" />
        <button
          type="button"
          className={`${ptSans.variable} font-PT-sans font-light`}
          onClick={handleClickSizeGuide}
        >
          Size guide
        </button>
      </div>

      <button
        className="m-2 mx-5 flex h-14 w-5/6 items-center justify-center rounded-full bg-black hover:cursor-pointer sm:hidden"
        type="button"
        disabled={!selectedSize}
        onClick={() => console.log("button works")}
      >
        <p className={` ${sofia.variable} font-sofia font-semibold text-white`}>
          {!selectedSize ? "SELECT SIZE" : "ADD TO CART"}
        </p>
      </button>

      <div className="w-full pt-5  md:max-w-3xl lg:max-w-5xl">
        <ProductReviews />
        <ProductDescription description={product?.description} />
        <ProductDetails details={product?.details} />
      </div>
      <SizeGuide
        showSizeGuide={showSizeGuide}
        handleClickSizeGuide={handleClickSizeGuide}
      />
      {/* you might like these products as well */}
      <div className="w-full">
        <p>You also might like</p>
        {/* use swiper to create another horizontal scrolling image carousel */}
        <div className="flex w-full overflow-scroll overflow-x-scroll p-2">
          <div className="m-1 h-44  w-44 bg-gray-200" />
          <div className="h-44 w-44 bg-gray-200" />
          <div className="h-44 w-44 bg-gray-200" />
          <div className="h-44 w-44 bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Page;

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const productId = query.id?.[0];
  const product = await prisma.product.findUnique({
    where: {
      productId,
    },
  });

  const serializedProduct = {
    ...product,
    createdAt: product?.createdAt.toISOString(),
    updatedAt: product?.updatedAt.toISOString(),
  };

  return {
    props: {
      productId,
      product: serializedProduct,
    },
  };
};

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
