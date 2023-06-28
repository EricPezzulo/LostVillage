/* eslint-disable @next/next/no-img-element */
import { Sofia_Sans } from "next/font/google";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});
const HomeScreenCategoriesSelect = () => {
  return (
    <div className={`${sofia.variable} py-10 font-sofia`}>
      <div className="mx-4 my-2 flex items-end justify-between bg-[#ebeff1] p-2">
        <p className="ml-5 text-xl ">SHOES</p>
        <img
          className="cover h-24 w-36 object-contain"
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/d6362dbdbd474c5ab7591cb4b399fdbf_9366/adifom-stan-smith-mule-shoes.jpg"
          alt="shoe"
        />
      </div>
      <div className="mx-4 my-2 flex items-end justify-between bg-[#ebeff1] p-2">
        <p className="ml-5 text-xl ">CLOTHING</p>
        <img
          className="h-24 w-36 object-contain"
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/93a9354502ed4ab6b585af2a013348d3_9366/train-essentials-feelready-training-tee.jpg"
          alt="shoe"
        />
      </div>
      <div className="mx-4 my-2 flex items-end justify-between bg-[#ebeff1] p-2">
        <p className="ml-5 text-xl ">BEST SELLERS</p>
        <img
          className="h-24 w-36 object-contain"
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/2d0eb858bdbd4e31a809a89e01653d04_9366/athletic-cushioned-crew-6-pairs.jpg"
          alt="shoe"
        />
      </div>
      <div className="mx-4 my-2 flex items-end justify-between bg-[#ebeff1] p-2">
        <p className="ml-5 text-xl ">NEW ARRIVALS</p>
        <img
          className="h-24 w-36 object-contain"
          src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/4dc9c07ee90e464b942b2bd1fa73cb5b_9366/swift-run-1.0-shoes.jpg"
          alt="shoe"
        />
      </div>
    </div>
  );
};

export default HomeScreenCategoriesSelect;
