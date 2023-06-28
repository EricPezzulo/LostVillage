/* eslint-disable @next/next/no-img-element */
interface FeaturedProductCardProps {
  image?: string;
  title?: string;
  category?: string;
  variants?: string;
  price?: string;
}

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="w-full rounded p-2 hover:scale-105 hover:cursor-pointer">
      <div className="relative flex w-36 flex-col items-center justify-center rounded bg-gray-200">
        <img src={image} alt={title} />
        <div className="absolute bottom-0 left-2 bg-gray-400 px-1 pt-1">
          <p className="text-xs text-white">$70</p>
        </div>
      </div>
      <p className="flex whitespace-normal text-sm font-light">{title}</p>
    </div>
  );
};
export default FeaturedProductCard;
