import { configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, ThunkMiddleware } from 'redux-thunk';
import type { Action } from 'redux';

// * @Reducers
import foodReducer from '@/reducers/foodReducer';

const store = configureStore({
  reducer: {
    foods: foodReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
