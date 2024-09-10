import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload is what we pass = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const cartItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      cartItem.quantity++;
      cartItem.totalPrice = cartItem.quantity * cartItem.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const cartItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      cartItem.quantity--;
      cartItem.totalPrice = cartItem.quantity * cartItem.unitPrice;

      if (cartItem.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearItem(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCartTotalQuantity = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCartTotalPrice = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
