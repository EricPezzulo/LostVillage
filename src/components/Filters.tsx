import { LuFilter } from "react-icons/lu";

const Filters = () => {
  return (
    <div className="p-2">
      <div className="flex w-full items-center justify-between">
        <p className="">
          Featured products <span className="text-sm text-gray-500">(35)</span>
        </p>
        <LuFilter className="h-6 w-6 text-gray-600" />
      </div>
    </div>
  );
};

export default Filters;
