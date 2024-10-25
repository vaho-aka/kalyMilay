import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FoodItem, FoodState } from '@/constants/type';

const initialState: FoodState = {
  foods: [],
  product: {
    _id: '',
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    ratings: 0,
  },
  loading: false,
  error: '',
};

const foodReducer = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    GET_FOOD_REQUEST(state) {
      state.loading = true;
    },
    GET_FOOD_SUCCESS(state, action: PayloadAction<FoodItem[]>) {
      state.loading = false;
      state.foods = action.payload;
      state.error = '';
    },
    GET_FOOD_BY_ID_SUCCESS(state, action: PayloadAction<FoodItem>) {
      state.loading = false;
      state.product = action.payload;
      state.error = '';
    },
    GET_FOOD_FAIL(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const foodActions = foodReducer.actions;
export default foodReducer.reducer;
