import { BsFilter } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { PT_Sans, Sofia_Sans } from "next/font/google";
import ProductResults from "~/components/ProductResults";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <h4 className={`${sofia.variable} font-semi-bold font-sofia text-xl`}>
          Men&apos;s Clothing
        </h4>
        <div className="flex items-center ">
          <BiSort className="mr-2 h-5 w-5" />
          <BsFilter className="h-6 w-6" />
        </div>
      </div>
      <div
        className={`${ptSans.variable} font-PT-sans flex w-full flex-col items-center px-5`}
      >
        <p className="pb-3">Search though our summer styles</p>
        <div>
          <ProductResults />
        </div>
      </div>
    </div>
  );
};

export default Page;
