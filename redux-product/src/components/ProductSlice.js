import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: Date.now(),
        name: action.payload.name,
        price: action.payload.price,
      };
      state.products.push(newProduct);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      state.products.forEach((product) => {
        if (product.id === action.payload.id) {
          product.name = action.payload.name;
          product.price = action.payload.price;
        }
      });
    },
  },
});

export const { updateProduct, addProduct, removeProduct } =
  ProductSlice.actions;
export default ProductSlice.reducer;
