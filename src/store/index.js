import { configureStore } from '@reduxjs/toolkit';
import deliveryReducer from '@/store/deliverySlice';

export default configureStore({
  reducer: {
    delivery: deliveryReducer
  }
});