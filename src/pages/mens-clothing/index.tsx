import { BsFilter } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { PT_Sans, Sofia_Sans } from "next/font/google";
import ProductResults from "~/components/ProductResults";
import { api } from "~/utils/api";
import type { GetServerSideProps } from "next";
import type { ParsedUrlQuery } from "querystring";

const Page = ({ query }: { query: ParsedUrlQuery }) => {
  const { data } = api.products.getAllMensProducts.useQuery();
  console.log(query);
  if (!data) return <div>something went wrong</div>;
  const { products } = data;
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
        className={`${ptSans.variable} flex w-full flex-col items-center px-5 font-PT-sans`}
      >
        <p className="pb-3">Search though our summer styles</p>
        <div>
          <ProductResults products={products} />
        </div>
      </div>
    </div>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return Promise.resolve({
    props: {
      query,
    },
  });
};

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
