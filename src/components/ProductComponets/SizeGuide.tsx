import { AnimatePresence, motion } from "framer-motion";
import { PT_Sans } from "next/font/google";
import { IoCloseOutline } from "react-icons/io5";
import useViewportSize from "~/hooks/useViewportSize";

interface SizeGuideProps {
  showSizeGuide: boolean;
  handleClickSizeGuide: React.MouseEventHandler<HTMLButtonElement>;
}

const mobileVariants = {
  initial: { y: 600 },
  animate: { y: 0 },
  exit: { y: 600 },
  transition: { duration: 0.3 },
};

const desktopVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

const SizeGuide: React.FC<SizeGuideProps> = ({
  showSizeGuide,
  handleClickSizeGuide,
}) => {
  const { width } = useViewportSize();
  const isMobile = width <= 640;
  const currentVariants = isMobile ? mobileVariants : desktopVariants;

  return (
    <AnimatePresence>
      {showSizeGuide && (
        <motion.div
          className="fixed bottom-0  z-10 flex
          h-2/3 w-screen flex-col items-center border-t-2 border-gray-700 bg-gray-100 sm:inset-0 sm:m-auto sm:h-3/5 sm:w-3/4 sm:max-w-[800px] sm:rounded sm:border-2 sm:drop-shadow-2xl"
          initial={currentVariants.initial}
          animate={currentVariants.animate}
          exit={currentVariants.exit}
          transition={currentVariants.transition}
        >
          <div className="overflow-y-scroll scrollbar-hide">
            <div
              className={`${ptSans.variable} flex w-full items-center justify-between`}
            >
              <p className="font-meduim p-4 text-2xl">Size Guide</p>
              <button
                className="absolute -top-7 right-3 rounded-full border-2 border-black bg-white p-2 sm:right-3 sm:top-3 sm:rounded sm:border-none sm:bg-black sm:p-0 sm:text-white"
                type="button"
                onClick={handleClickSizeGuide}
              >
                <IoCloseOutline className="h-8 w-8" />
              </button>
            </div>
            <div className="p-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              dolorum explicabo ad assumenda impedit perferendis delectus ea
              amet distinctio, architecto debitis et itaque repudiandae. Aut
              alias consectetur maxime natus laboriosam.
            </div>
            <div className="p-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              dolorum explicabo ad assumenda impedit perferendis delectus ea
              amet distinctio, architecto debitis et itaque repudiandae. Aut
              alias consectetur maxime natus laboriosam.
            </div>{" "}
            <div className="p-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              dolorum explicabo ad assumenda impedit perferendis delectus ea
              amet distinctio, architecto debitis et itaque repudiandae. Aut
              alias consectetur maxime natus laboriosam.
            </div>{" "}
            <div className="p-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              dolorum explicabo ad assumenda impedit perferendis delectus ea
              amet distinctio, architecto debitis et itaque repudiandae. Aut
              alias consectetur maxime natus laboriosam.
            </div>{" "}
            <div>
              <div className="p-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis dolorum explicabo ad assumenda impedit perferendis
                delectus ea amet distinctio, architecto debitis et itaque
                repudiandae. Aut alias consectetur maxime natus laboriosam.
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SizeGuide;

const ptSans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-PT-sans",
  weight: ["400", "700"],
});
