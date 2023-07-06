/* eslint-disable @next/next/no-img-element */
import { GoTrash } from "react-icons/go";
const CartItem = () => {
  return (
    <div className="flex flex-row items-center border-b p-5 last:border-b-0">
      <div className="flex">
        <img
          src="https://cdn.shopify.com/s/files/1/0352/4571/9597/products/River_Black_Front_S_close-up.jpg?v=1670428447"
          className="h-20 w-20 rounded object-cover p-1"
          alt="test"
        />
      </div>
      <div className="ml-2 flex grow flex-col">
        <p className="font-medium">Rayban Wafer Sunglasses</p>
        <p className="text-sm text-gray-700">Sunglasses</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-700">Quantity:</span>
            <input
              className="flex w-10 bg-gray-100 text-sm"
              placeholder="1"
              type="number"
            />{" "}
            <p className="ml-5 text-sm font-bold">$99</p>{" "}
          </div>{" "}
          <GoTrash className="h-5 w-5 text-gray-700 duration-100 ease-in-out hover:cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
