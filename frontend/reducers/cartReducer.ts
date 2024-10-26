import { CartItem, CartState } from '@/constants/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const cartFromStorage: CartState = {
  dishes: [],
  totalAmount: 0,
};

const cartReducer = createSlice({
  name: 'cart',
  initialState: cartFromStorage,
  reducers: {
    ADD_ITEM(state, action: PayloadAction<CartItem>) {},
  },
});
