import { foodActions } from '../reducers/foodReducer';
import { AppThunk } from '@/constants/store';
import { FoodItem } from '@/constants/interfaces';
import apiClient from '@/constants/api';

export const getDishes = (): AppThunk => async (dispatch) => {
  try {
    dispatch(foodActions.GET_FOOD_REQUEST());

    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    const { data } = await apiClient.get<FoodItem[]>('/api/v1/dishes', config);
    dispatch(foodActions.GET_FOOD_SUCCESS(data));
  } catch (error: any) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch(foodActions.GET_FOOD_FAIL(message));
  }
};
