// features/bucket/bucketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BucketItem {
  categoryId: number;
  categoryName: string;
  name: string;
  quantity: number;
}

interface BucketState {
  items: BucketItem[];
}

const initialState: BucketState = {
  items: [],
};

const bucketSlice = createSlice({
  name: 'bucket',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<BucketItem>) {
      state.items.push(action.payload);
    },
    clearItems(state) {
      state.items = []
    }
  },
});

export const { addItem, clearItems } = bucketSlice.actions;
export default bucketSlice.reducer;
