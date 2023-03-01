import { v4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/axios';

export const deliveryFetch = createAsyncThunk(
  'delivery/deliveryFetch',
  async function(_, { rejectWithValue }) {
    try {
      const { data } = await axios.get('/vacancy/geo-state');

      return data.pickPoints.map(item => ({
        id: v4(),
        isActive: false,
        ...item
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deliveryReducer = createSlice({
  name: 'delivery',
  initialState: {
    items: [],
    pending: false,
    error: null
  },
  reducers: {
    deliveryChange: (state, action) => {
      state.items.map(item => {
        item.isActive = false;

        if (item.id === action.payload) {
          item.isActive = true;
        }

        return item;
      });
    }
  },
  extraReducers(builder) {
    builder
      .addCase(deliveryFetch.pending, (state, action) => {
        state.pending = true;
        state.error = null;
      })
      .addCase(deliveryFetch.fulfilled, (state, action) => {
        state.pending = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(deliveryFetch.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      });
  }
});

export const { deliveryChange } = deliveryReducer.actions;
export default deliveryReducer.reducer;