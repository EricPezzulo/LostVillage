/* eslint-disable @next/next/no-img-element */
import { PT_Sans, Sofia_Sans } from "next/font/google";
import { useState } from "react";
import { CiRuler } from "react-icons/ci";
import ShoeSizeVariantGrid from "~/components/ShoeSizeVariantGrid";
import ProductReviews from "~/components/ProductComponets/ProductReviews";
import ProductDescription from "~/components/ProductComponets/ProductDescription";
import ProductDetails from "~/components/ProductComponets/ProductDetails";
import SizeGuide from "~/components/ProductComponets/SizeGuide";
import { ProductImageCarousel } from "~/components/ProductComponets/ProductImageCarousel";
import type { GetServerSideProps, NextPage } from "next";
import Custom404 from "~/pages/404";
import ProductHeaderInfo from "~/components/ProductComponets/ProductHeaderInfo";
import { PrismaClient } from "@prisma/client";
import "swiper/css";
import NavigateImageSliderButtons from "~/components/elements/NavigateImageSliderButtons";
import RecommendedProducts from "~/components/ProductComponets/RecommendedProducts";

import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import ClothingSizeVariantGrid from "~/components/ClothingSizeVariantGrid";

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
    variants: Variant[];
    clothingSizes: string[];
    shoeSizes: number[];
    price: number;
    category: string;
  };
  error: string;
}
interface Variant {
  id: string;
  color: string;
  images: string[];
  productId: string;
}

const Page: NextPage<pageProps> = ({ product, error }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const [prevImageEl, setPrevImageEl] = useState<HTMLElement | null>(null);
  const [nextImageEl, setNextImageEl] = useState<HTMLElement | null>(null);

  const [varSelected, setVarSelected] = useState<Variant[] | null>(null);
  const [banner, setBanner] = useState(true);
  const handleClickSizeGuide = () => {
    setShowSizeGuide((prev) => !prev);
  };

  const colorVar = product.variants[0];
  if (colorVar && !varSelected) setVarSelected([colorVar]);
  if (error || !product) return <Custom404 />;

  return (
    <div className="relative flex w-full max-w-7xl grow flex-col items-center bg-white sm:justify-center sm:self-center sm:pb-10">
      <AnimatePresence>
        {banner && (
          <motion.div
            initial={{ height: 56 }}
            animate={banner ? { height: 56 } : { height: 0 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-14 w-screen items-center justify-center bg-black text-white"
          >
            <div className="flex w-full items-end justify-center ">
              <p
                className={`${ptSans.variable} font-PT-sans text-xl font-bold`}
              >
                CHECK OUT OUR SUMMER DEALS
              </p>
            </div>
            <button
              type="button"
              onClick={() => setBanner(false)}
              className="absolute right-2 justify-end pr-5"
            >
              <IoCloseOutline className="h-7 w-7 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ marginTop: banner ? 30 : 0 }}
        animate={{ marginTop: banner ? 30 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex w-full flex-col items-center justify-center sm:pt-10"
      >
        <div className="flex w-full sm:hidden">
          <ProductHeaderInfo
            title={product?.title}
            category={product?.category}
            price={product?.price}
          />
        </div>
        <div className="flex w-full max-w-5xl flex-col justify-center sm:flex-row">
          <ProductImageCarousel
            prevImageEl={prevImageEl}
            nextImageEl={nextImageEl}
            setPrevImageEl={setPrevImageEl}
            setNextImageEl={setNextImageEl}
            images={varSelected?.[0]?.images}
          />
          <div className="sm:pl-5 lg:ml-10 lg:w-full ">
            <div className="hidden sm:block">
              <ProductHeaderInfo
                title={product?.title}
                category={product?.category}
                price={product?.price}
              />
            </div>
            <div className="w-full p-5 sm:pl-0">
              <p className={`${ptSans.variable} font-PT-sans`}>
                {product?.variants?.length} variants available
              </p>
              <p className={`${ptSans.variable} font-PT-sans`}>
                {varSelected?.[0]?.color}
              </p>
              <div className="flex w-full items-start ">
                {product?.variants?.map((variant, key) => (
                  <button
                    type="button"
                    onClick={() => setVarSelected([variant])}
                    key={key}
                    className={classNames(
                      varSelected?.[0] === variant
                        ? "border-2 border-sky-400"
                        : null,
                      "ml-2 flex h-20 w-20 bg-gray-400 first:ml-0 "
                    )}
                  >
                    <img
                      className="h-full min-w-full max-w-full object-cover"
                      src={variant?.images?.[0]}
                      alt=""
                    />
                  </button>
                ))}
              </div>
            </div>
            {product.shoeSizes.length > 0 && (
              <ShoeSizeVariantGrid
                sizes={product?.shoeSizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            )}
            {product.clothingSizes.length > 0 && (
              <ClothingSizeVariantGrid
                sizes={product?.clothingSizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            )}

            <div className="mt-4 hidden  sm:flex">
              <button
                className=" flex h-10 w-36 items-center justify-center rounded-full bg-black hover:cursor-pointer sm:inset-0 sm:flex"
                type="button"
                disabled={!selectedSize}
                // onClick={() => console.log("button works")}
              >
                <p
                  className={` ${sofia.variable} font-sofia font-semibold text-white`}
                >
                  {!selectedSize ? "SELECT SIZE" : "ADD TO CART"}
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full  items-start pb-4 pl-4 pt-10 md:max-w-3xl lg:max-w-5xl">
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
          // onClick={() => console.log("button works")}
        >
          <p
            className={` ${sofia.variable} font-sofia font-semibold text-white`}
          >
            {!selectedSize ? "SELECT SIZE" : "ADD TO CART"}
          </p>
        </button>
        <div className="w-full pt-5  md:max-w-3xl lg:max-w-5xl">
          <ProductReviews productId={product?.productId} />
          <ProductDescription description={product?.description} />
          <ProductDetails details={product?.details} />
        </div>
        <SizeGuide
          showSizeGuide={showSizeGuide}
          handleClickSizeGuide={handleClickSizeGuide}
        />
        <div className="w-full max-w-5xl py-5 md:max-w-[768px] lg:max-w-[1024px]">
          <div className="flex items-center justify-between px-5 md:px-0">
            <p
              className={`${sofia.variable} py-1 text-left font-sofia text-xl `}
            >
              You also might like
            </p>
            <div className="hidden sm:flex">
              <NavigateImageSliderButtons
                setPrevEl={setPrevEl}
                setNextEl={setNextEl}
              />
            </div>
          </div>
          <RecommendedProducts prevEl={prevEl} nextEl={nextEl} />
        </div>
      </motion.div>
    </div>
  );
};

export default Page;

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productId = query.id?.[0];
  const product = await prisma.product.findUnique({
    where: {
      productId,
    },
    include: { variants: true },
  });

  if (!product) return { props: { error: true } };
  const serializedProduct = {
    ...product,
    createdAt: product?.createdAt.toISOString(),
    updatedAt: product?.updatedAt.toISOString(),
  };

  return {
    props: {
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
