import { IoCloseOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import { type FC } from "react";

interface ShoppingCartModalProps {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCartModal: FC<ShoppingCartModalProps> = ({
  isCartOpen,
  setIsCartOpen,
}) => {
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  if (isCartOpen)
    return (
      <div className="fixed inset-0 flex h-full flex-col items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm sm:top-14">
        <div className="h-full w-full rounded-md bg-white shadow sm:h-fit sm:w-fit">
          <div className="flex h-full w-full flex-col shadow sm:max-h-[700px] sm:w-96 sm:rounded-md">
            <div className="flex items-center justify-between border-b bg-black p-5 text-white sm:rounded-t-md sm:bg-white sm:text-black">
              <p className="">Your bag</p>
              <button onClick={handleCloseCart}>
                <IoCloseOutline className="h-8 w-8" />
              </button>
            </div>
            <div className="flex h-full  flex-col overflow-y-auto  scrollbar-hide">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>

            <div className="flex flex-col items-center justify-center border-t py-5">
              <button
                type="button"
                className="h-12 w-4/5 rounded-full bg-black text-white sm:h-10 sm:w-64 sm:rounded"
              >
                Checkout
              </button>
              <button
                type="button"
                className="mt-3 h-12 w-4/5 rounded-full border bg-white text-black sm:h-10 sm:w-64 sm:rounded"
              >
                Return to shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShoppingCartModal;
