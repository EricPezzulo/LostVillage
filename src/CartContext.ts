import { createContext } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems?: CartItem[];
  //   getProductQuantity: (itemId: number) => number | undefined;
  //   addOneToCart: (itemId: number) => void;
  //   removeOneFromCart: (itemId: number) => void;
  //   deleteOneFromCart: (itemId: number) => void;
  //   emptyCart: () => void;
  //   getTotalCost: () => number | undefined;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  //   getProductQuantity: () => 0,
  //   addOneToCart: () => {},
  //   removeOneFromCart: () => {},
  //   deleteOneFromCart: () => {},
  //   emptyCart: () => {},
  //   getTotalCost: () => 0,
});

// export const useCartContext = () => useContext(CartContext);
