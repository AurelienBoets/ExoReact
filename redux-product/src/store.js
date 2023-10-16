import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./components/ProductSlice";

export default configureStore({
  reducer: {
    products: ProductSlice,
  },
});
