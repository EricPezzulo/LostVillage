import { AnimatePresence, motion } from "framer-motion";
import { PT_Sans } from "next/font/google";
import { IoCloseOutline } from "react-icons/io5";

const ptSans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-PT-sans",
  weight: ["400", "700"],
});

interface SizeGuideProps {
  showSizeGuide: boolean;
  handleClickSizeGuide: React.MouseEventHandler<HTMLButtonElement>;
}
const SizeGuide: React.FC<SizeGuideProps> = ({
  showSizeGuide,
  handleClickSizeGuide,
}) => {
  return (
    <AnimatePresence>
      {showSizeGuide && (
        <motion.div
          className="fixed bottom-0  z-10 flex
          h-2/3 w-screen flex-col items-center border-t-2 border-gray-700 bg-gray-100 sm:absolute sm:inset-0 sm:m-auto sm:h-96 sm:w-[600px] sm:rounded sm:border-2 sm:drop-shadow-2xl"
          initial={{ y: 600 }}
          animate={{ y: 0 }}
          exit={{ y: 600 }}
          transition={{ duration: 0.3 }}
        >
          <div className="overflow-y-scroll scrollbar-hide">
            <div
              className={`${ptSans.variable} flex w-full items-center justify-between`}
            >
              <p className="font-meduim p-4 text-2xl">Size Guide</p>
              <button
                className="absolute -top-7 right-3 rounded-full border-2 border-black bg-white p-2 sm:right-3 sm:top-3"
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
