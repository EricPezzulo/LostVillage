import { Sofia_Sans } from "next/font/google";
import Link from "next/link";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});

const Hero = () => {
  return (
    <div id="hero-section" className="">
      <div className="relative flex h-[500px] justify-center object-cover">
        <div className="relative flex">
          <video className="object-cover" autoPlay loop muted playsInline>
            <source type="video/mp4" src="/hero-video.mp4" />
          </video>
          <div className="absolute left-5 top-1/2  font-bold text-white">
            <p className={`${sofia.variable} font-sofia text-3xl`}>
              SUMMER SALE
            </p>
            <p className={`${sofia.variable} font-sofia text-lg`}>30% off</p>
          </div>
          <Link href="/mens-clothing">
            <div className="absolute bottom-[136px] left-5  flex h-10 w-28 items-center bg-white pr-2 duration-200 ease-in-out hover:cursor-pointer hover:bg-black hover:font-semibold hover:text-white">
              <p
                className={`${sofia.variable} text-bold font-sofia ml-2 text-xl`}
              >
                Shop Men
              </p>
            </div>
          </Link>

          <div className="absolute bottom-20 left-5 flex h-10 w-36 items-center bg-white pr-2 duration-200 ease-in-out hover:cursor-pointer hover:bg-black hover:font-semibold hover:text-white">
            <p
              className={`${sofia.variable} text-bold font-sofia ml-2 text-xl`}
            >
              Shop Women
            </p>
          </div>
          <div className="duration-200hover:font-semibold absolute bottom-5 left-5 flex h-10 items-center bg-white pr-2 ease-in-out hover:cursor-pointer hover:bg-black hover:font-semibold hover:text-white">
            <p
              className={`${sofia.variable} text-bold font-sofia ml-2 text-xl`}
            >
              Shop Kids
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
