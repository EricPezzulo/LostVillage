import { IoCloseOutline } from "react-icons/io5";
import CartItem from "./CartItem";
import { useEffect, type FC, useContext } from "react";
import useViewportSize from "~/hooks/useViewportSize";
import { CartContext } from "~/CartContext";

interface ShoppingCartModalProps {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCartModal: FC<ShoppingCartModalProps> = ({
  isCartOpen,
  setIsCartOpen,
}) => {
  const cartData = useContext(CartContext);
  console.log(cartData);

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  const { width } = useViewportSize();

  useEffect(() => {
    if (width < 640) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isCartOpen, width]);

  if (isCartOpen)
    return (
      <div className="fixed inset-0 flex h-full flex-col items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm sm:top-14">
        <div className="h-full w-full rounded-md bg-white shadow sm:h-fit sm:w-fit">
          <div className="flex h-full w-full flex-col shadow sm:max-h-[700px] sm:w-96 sm:rounded-md">
            <div className="flex items-center justify-between border-b bg-black p-5 text-white sm:rounded-t-md sm:bg-white sm:text-black">
              <p className="">Your bag</p>
              <button onClick={handleCloseCart}>
                <IoCloseOutline className="h-8 w-8 hover:text-gray-500" />
              </button>
            </div>
            <div className="flex h-full  flex-col overflow-y-auto  scrollbar-hide">
              {cartItems.map((item, key) => (
                <CartItem
                  key={key}
                  title={item.title}
                  category={item.category}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
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
                onClick={() => setIsCartOpen(false)}
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

const cartItems = [
  {
    title: "Raybans Wafer Sunglasses",
    category: "Sunglasses",
    price: 125,
    quantity: 2,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0352/4571/9597/products/River_Black_Front_S_close-up.jpg?v=1670428447",
  },
  {
    title: "Air Jordan 1 Mid SE",
    category: "Men's Shoes",
    price: 165,
    quantity: 1,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ca113e5f-2165-476a-8dcf-ce7a0d85356c/air-jordan-1-mid-se-mens-shoes-Zn07hL.png",
  },
  {
    title: "Jordan Flight MVP",
    category: "Men's T-Shirts",
    price: 38,
    quantity: 1,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/774571c9-b8e2-450c-bb4f-74ba1588b47a/jordan-flight-mvp-mens-t-shirt-F8FQf2.png",
  },
];
