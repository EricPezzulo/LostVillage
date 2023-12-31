import { Sofia_Sans } from "next/font/google";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="hero-section">
      <div className="relative flex justify-center">
        <div className="relative flex min-h-[500px] justify-center object-cover">
          <video className="object-cover" autoPlay loop muted playsInline>
            <source type="video/mp4" src="/hero-video.mp4" />
          </video>
          <div className="absolute mb-5 h-full w-full max-w-6xl">
            <div className="absolute bottom-[200px] left-5 p-2 font-bold text-white">
              <p className={`${sofia.variable} font-sofia text-3xl`}>
                SUMMER SALE
              </p>
              <p className={`${sofia.variable} font-sofia text-lg`}>30% off</p>
            </div>
            <Link href="/product-results?category=mens">
              <div className="absolute bottom-[140px] left-5  flex h-10 w-28 items-center bg-white pr-2 duration-200 ease-in-out hover:cursor-pointer hover:bg-black hover:font-semibold hover:text-white">
                <p
                  className={`${sofia.variable} text-bold ml-2 font-sofia text-xl`}
                >
                  Shop Men
                </p>
              </div>
            </Link>
            <Link href="/product-results?category=womens">
              <div className="absolute bottom-20 left-5 flex h-10 w-36 items-center bg-white pr-2 duration-200 ease-in-out hover:cursor-pointer hover:bg-black hover:font-semibold hover:text-white">
                <p
                  className={`${sofia.variable} text-bold ml-2 font-sofia text-xl`}
                >
                  Shop Women
                </p>
              </div>
            </Link>
            <Link href="/product-results?category=kids">
              <div className="absolute bottom-5 left-5 flex h-10 items-center bg-white pr-2 duration-200 ease-in-out hover:cursor-pointer hover:bg-black hover:font-semibold hover:text-white">
                <p
                  className={`${sofia.variable} text-bold ml-2 font-sofia text-xl`}
                >
                  Shop Kids
                </p>
              </div>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const sofia = Sofia_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sofia",
});
