import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { config } from '../../config';

export interface Category {
  categoryId: number;
  name: string;
}

interface CategoriesState {
  items: Category[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedCategoryId: number | null;
}

const initialState: CategoriesState = {
  items: [],
  status: 'idle',
  error: null,
  selectedCategoryId: null,
};

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const response = await axios.get<Category[]>(`${config.apiBaseUrl}/categories`);
  return response.data;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategoryId(state, action: PayloadAction<number | null>) {
      state.selectedCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export const { setSelectedCategoryId } = categoriesSlice.actions;
export default categoriesSlice.reducer;
