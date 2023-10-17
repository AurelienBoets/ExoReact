import { configureStore } from "@reduxjs/toolkit";
import RecipeSlice from "./components/RecipeSlice";
import AuthSlice from "./components/AuthSlice";

export default configureStore({
  reducer: {
    recipe: RecipeSlice,
    auth: AuthSlice,
  },
});
