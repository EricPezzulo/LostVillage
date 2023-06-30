import classNames from "classnames";

interface ShoeSizeProps {
  men: number;
  women: number;
  selectedSize?: string | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}

const ShoeSizeVariant: React.FC<ShoeSizeProps> = ({
  men,
  women,
  selectedSize,
  setSelectedSize,
}) => {
  const variantSize = `M${men}/W${women}`;
  const handleSelect = () => {
    setSelectedSize(variantSize);
  };

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={classNames(
        selectedSize === variantSize ? "bg-gray-200" : null,
        `flex h-10 w-full items-center justify-center rounded border duration-100 ease-in-out hover:bg-gray-200 sm:w-28`
      )}
    >
      <p className="flex text-sm text-gray-800 sm:text-base">
        M {men} / W {women}
      </p>
    </button>
  );
};

export default ShoeSizeVariant;
