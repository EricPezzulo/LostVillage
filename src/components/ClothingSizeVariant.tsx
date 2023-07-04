import classNames from "classnames";

interface ClothingSizeProps {
  size: string | null;
  selectedSize?: string | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}

const ClothingSizeVariant: React.FC<ClothingSizeProps> = ({
  size,
  selectedSize,
  setSelectedSize,
}) => {
  const variantSize = size;
  const handleSelect = () => {
    setSelectedSize(variantSize);
  };

  return (
    <button
      type="button"
      onClick={handleSelect}
      className={classNames(
        selectedSize === size ? "bg-gray-200" : null,
        `flex h-10 w-full items-center justify-center rounded border duration-100 ease-in-out hover:bg-gray-200 sm:w-28`
      )}
    >
      <p className="flex text-sm text-gray-800 sm:text-base">{size}</p>
    </button>
  );
};

export default ClothingSizeVariant;
