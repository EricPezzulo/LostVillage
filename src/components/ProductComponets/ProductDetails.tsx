import { AnimatePresence, motion } from "framer-motion";
import { PT_Sans } from "next/font/google";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const ptSans = PT_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface DetailsProps {
  details: string[];
}
const ProductDetails: React.FC<DetailsProps> = ({ details }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const handleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };
  return (
    <button
      type="button"
      className="flex w-full flex-col items-center justify-between border-y p-5"
      onClick={handleShowDetails}
    >
      <div className="flex w-full justify-between">
        <h4 className={`${ptSans.variable} font-PT-sans font-semibold`}>
          Details
        </h4>
        <AnimatePresence>
          <motion.div
            initial={false}
            animate={{ rotate: showDetails ? -180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <BiChevronDown className="h-7 w-7" />
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", position: "relative" }}
          >
            <ul className={`${ptSans.variable} font-PT-sans py-4 text-left`}>
              {details.map((detail, key) => (
                <li className="py-1" key={key}>
                  &#x2022; {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ProductDetails;
