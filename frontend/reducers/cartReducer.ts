import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from '@/constants/interfaces';

const cartFromStorage: CartState = {
  dishes: [],
  totalAmount: 0,
};

const cartReducer = createSlice({
  name: 'cart',
  initialState: cartFromStorage,
  reducers: {
    ADD_ITEM(state, action: PayloadAction<CartItem>) {
      const price = action.payload.food.price;

      const itemIndex = state.dishes.findIndex(
        ({ food }) => food._id === action.payload.food._id
      );

      const existItem = state.dishes[itemIndex];

      if (!existItem) {
        state.totalAmount += price * action.payload.amount;
        // console.log(state.totalAmount);
        state.dishes = [...state.dishes, action.payload];
      } else {
        state.totalAmount -= price * existItem.amount;

        const amountFree = existItem.food.quantity - existItem.amount;

        const amount =
          existItem.food.quantity >= existItem.amount + action.payload.amount
            ? existItem.amount + action.payload.amount
            : existItem.amount + amountFree;

        const updateItem = {
          ...action.payload,
          amount,
        };

        state.totalAmount += price * updateItem.amount;
        state.dishes[itemIndex] = updateItem;
      }
    },
    REMOVE_ITEM(state, action: PayloadAction<string>) {
      const itemIndex = state.dishes.findIndex(
        ({ food }) => food._id === action.payload
      );

      const itemToRemove = state.dishes[itemIndex];

      const price = itemToRemove.food.price;
      state.totalAmount -= price;

      const updatedItem = {
        ...itemToRemove,
        amount: itemToRemove.amount - 1,
      };

      let updatedItems: Array<CartItem>;

      if (updatedItem.amount < 1) {
        state.dishes = state.dishes.filter(
          ({ food }) => food._id !== updatedItem.food._id
        );
        // state.totalAmount -= price;
      } else {
        updatedItems = [...state.dishes];
        updatedItems[itemIndex] = updatedItem;

        state.dishes = updatedItems;
      }
    },
  },
});

export const cartActions = cartReducer.actions;
export default cartReducer.reducer;