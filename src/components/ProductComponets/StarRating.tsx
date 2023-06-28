import React from "react";

interface StarRatingProps {
  rating: number | 0;
  totalStars: number;
  starColor: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalStars,
  starColor,
}) => {
  return (
    <div>
      {[...(new Array(totalStars) as Array<undefined>)].map((_, index) => {
        const starValue = index + 1;
        let starClass = "text-gray-400";

        if (starValue <= rating) {
          starClass = `${starColor}`;
        } else if (starValue === Math.ceil(rating) && rating % 1 !== 0) {
          starClass = `${starColor} half-filled`;
        }
        return (
          <span key={index} className={`cursor-pointer text-xl ${starClass}`}>
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
