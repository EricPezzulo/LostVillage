/* eslint-disable @next/next/no-img-element */
import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});
const HomeScreenCategoriesSelect = () => {
  return (
    <div
      className={`${sofia.variable} mx-4 grid gap-2 py-10 font-sofia sm:grid-cols-2 lg:grid-cols-4`}
    >
      <div className="flex items-end justify-between bg-[#ebeff1] lg:relative lg:h-52 lg:flex-col lg:items-center">
        <p className="ml-5 p-2 text-xl lg:absolute lg:bottom-0 lg:p-0 ">
          SHOES
        </p>
        <img
          className="h-24 w-36 object-contain lg:h-44 lg:w-44"
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/d6362dbdbd474c5ab7591cb4b399fdbf_9366/adifom-stan-smith-mule-shoes.jpg"
          alt="shoe"
        />
      </div>
      <div className="flex items-end justify-between bg-[#ebeff1] lg:relative lg:h-52 lg:flex-col lg:items-center">
        <p className="ml-5 p-2 text-xl lg:absolute lg:bottom-0 lg:p-0">
          CLOTHING
        </p>
        <img
          className="h-24 w-36 object-contain lg:h-44 lg:w-full"
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/93a9354502ed4ab6b585af2a013348d3_9366/train-essentials-feelready-training-tee.jpg"
          alt="shoe"
        />
      </div>
      <div className="flex items-end justify-between bg-[#ebeff1] lg:relative lg:h-52 lg:flex-col lg:items-center">
        <p className="ml-5 p-2 text-xl lg:absolute lg:bottom-0 lg:p-0">
          BEST SELLERS
        </p>
        <img
          className="h-24 w-36 object-contain lg:h-44 lg:w-full"
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/2d0eb858bdbd4e31a809a89e01653d04_9366/athletic-cushioned-crew-6-pairs.jpg"
          alt="shoe"
        />
      </div>
      <div className="flex items-end justify-between bg-[#ebeff1] lg:relative lg:h-52 lg:flex-col lg:items-center">
        <p className="ml-5 p-2 text-xl lg:absolute lg:bottom-0 lg:p-0">
          NEW ARRIVALS
        </p>
        <img
          className="h-24 w-36 object-contain lg:h-44 lg:w-full"
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/4dc9c07ee90e464b942b2bd1fa73cb5b_9366/swift-run-1.0-shoes.jpg"
          alt="shoe"
        />
      </div>
    </div>
  );
};

export default HomeScreenCategoriesSelect;
