import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    incrementItemCount: (state, action) => {
      state.items[action.payload].count++;
    },
    decrementItemCount: (state, action) => {
      if (state.items[action.payload].count == 1) state.items.length = 0;
      else state.items[action.payload].count--;
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, incrementItemCount, decrementItemCount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
