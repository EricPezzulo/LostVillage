import { AnimatePresence, motion } from "framer-motion";
import { PT_Sans } from "next/font/google";
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import StarRating from "./StarRating";
import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";
// import { useUser } from "@clerk/nextjs";

type ReviewWithUser = RouterOutputs["reviews"]["getAll"][number];

const ProductReview = (props: ReviewWithUser) => {
  const { review, author } = props;
  console.log(props);
  // if (reviewsIsLoading) return <div>Loading...</div>;
  if (!review) return <div>Something went wrong</div>;

  return (
    <div
      key={review.id}
      className={`${ptSans.variable} flex flex-col border-t px-5  py-4 text-left font-PT-sans`}
    >
      <StarRating
        starColor="text-black"
        totalStars={review?.starCount}
        rating={5}
      />
      <p className="font-semibold">{review.title}</p>
      <p>{review.content}</p>
      <div className="pt-3">
        <p className="text-sm text-gray-500">
          {author.username} | {review?.createdAt.toDateString()}
        </p>
      </div>
    </div>
  );
};

const ProductReviews = () => {
  const [showReviews, setShowReviews] = useState<boolean>(false);
  // const [totalStars, setTotalStars] = useState<number>(0);

  const handleShowReviews = () => {
    if (reviews && reviews.length > 0) setShowReviews((prev) => !prev);
  };

  const { data: reviews } = api.reviews.getAll.useQuery();

  //add variable star numbers. will have to change prisma schema to store avgRating
  //and after every rating is pushed to db, a function will have to recalutate the avg Rating

  return (
    <div className="flex w-full flex-col items-center justify-between border-t md:mb-3 md:rounded-md md:border ">
      <button
        onClick={handleShowReviews}
        type="button"
        className="flex w-full items-center justify-between py-5"
      >
        <div className="flex items-center pl-5">
          <h4 className={`${ptSans.variable} font-PT-sans font-semibold`}>
            Reviews ({reviews?.length})
          </h4>
        </div>

        <div className="flex items-center pr-5">
          <StarRating starColor="text-sky-500" totalStars={5} rating={4} />
          <AnimatePresence>
            <motion.div
              initial={false}
              animate={{ rotate: showReviews ? -180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <BiChevronDown className="h-7 w-7" />
            </motion.div>
          </AnimatePresence>
        </div>
      </button>

      <AnimatePresence>
        {showReviews && (
          <motion.div
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", position: "relative" }}
            className="w-full"
          >
            <div>
              {reviews?.map((review, key) => (
                <ProductReview {...review} key={key} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductReviews;

const ptSans = PT_Sans({
  variable: "--font-PT-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});
