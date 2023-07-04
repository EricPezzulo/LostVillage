import { useState } from "react";

interface InteractiveStarRatingProps {
  totalStars: number;
  initialStars: number;
}
const InteractiveStarRating: React.FC<InteractiveStarRatingProps> = ({
  totalStars,
  initialStars,
}) => {
  const [rating, setRating] = useState(initialStars);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    // console.log(selectedRating);
  };

  return (
    <div>
      {[...(new Array(totalStars) as Array<undefined>)].map((_, index) => {
        const starValue = index + 1;
        let starClass = "text-gray-400";

        if (starValue <= rating) {
          starClass = "text-yellow-400";
        } else if (starValue === Math.ceil(rating) && rating % 1 !== 0) {
          starClass = "text-yellow-400 half-filled";
        }
        return (
          <span
            key={index}
            className={`cursor-pointer text-2xl ${starClass}`}
            onClick={() => handleStarClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default InteractiveStarRating;
