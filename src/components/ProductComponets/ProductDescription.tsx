import { AnimatePresence, motion } from "framer-motion";
import { PT_Sans } from "next/font/google";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const ptSans = PT_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface DescriptionProps {
  description: string;
}

const ProductDescription: React.FC<DescriptionProps> = ({ description }) => {
  const [showDesc, setShowDesc] = useState<boolean>(false);
  const handleShowDesc = () => {
    setShowDesc((prev) => !prev);
  };

  return (
    <button
      type="button"
      className="flex w-full flex-col items-center justify-between border-t p-5 md:mb-3 md:rounded-md md:border"
      onClick={handleShowDesc}
    >
      <div className="flex w-full justify-between">
        <h4 className={`${ptSans.variable} font-PT-sans font-semibold`}>
          Details
        </h4>
        <AnimatePresence>
          <motion.div
            initial={false}
            animate={{ rotate: showDesc ? -180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <BiChevronDown className="h-7 w-7" />
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {showDesc && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", position: "relative" }}
            className="w-full"
          >
            <p className={`${ptSans.variable} py-4 text-left font-PT-sans`}>
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ProductDescription;
