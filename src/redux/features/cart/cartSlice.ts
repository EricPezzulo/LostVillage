import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  cartQuantity: number | 0;
}

interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // add logic here to adjust quantity in cart if item already is in cart
      // check is productId exists in cartItems
      // if true -> add +1 to exisiting cartItem
      // else just add normally

      const newItem = action.payload;
      state.cartItems.push(newItem);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
