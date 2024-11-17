import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types/product';
import { products as initialProducts } from '@/data/products';

interface ProductsState {
  items: Product[];
  searchQuery: string;
  priceRange: [number, number];
  selectedCategory: string | null;
}

const initialState: ProductsState = {
  items: initialProducts,
  searchQuery: '',
  priceRange: [0, 100],
  selectedCategory: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSearchQuery, setPriceRange, setSelectedCategory } = productsSlice.actions;
export default productsSlice.reducer;