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
        selectedSize === variantSize ? "bg-gray-300" : null,
        `flex h-10 w-28 items-center justify-center rounded border duration-100 ease-in-out`
      )}
    >
      <p className="flex text-gray-800">
        M {men} / W {women}
      </p>
    </button>
  );
};

export default ShoeSizeVariant;
