import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Layout from "~/Layouts/Layout";
// import { CartContext, type CartItem } from "~/CartContext";
import { createContext, useState } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartContextValue = {
    cartItems: cartItems,
    // Your other properties and functions
  };
  // const [someContext, setSomeContext] = useState<number>(1);
  return (
    <ClerkProvider {...pageProps}>
      <CartContext.Provider value={cartContextValue}>
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      </CartContext.Provider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
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
