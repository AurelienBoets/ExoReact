import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./components/AuthSlice";
import RecipeSlice from "./components/RecipeSlice";

export default configureStore({
  reducer: {
    auth: AuthSlice,
    recipe: RecipeSlice,
  },
});
