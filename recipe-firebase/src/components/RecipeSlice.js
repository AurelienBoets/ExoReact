import { createSlice } from "@reduxjs/toolkit";

const RecipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipes: [],
  },
  reducers: {
    addRecipe: (state, action) => {
      state.recipes = state.recipes.push(action.payload);
    },
    editRecipe: (state, action) => {
      state.recipes.forEach((recipe) => {
        if (recipe.id === action.payload.id) {
          recipe.title = action.payload.title;
          recipe.instructions = action.payload.instructions;
          recipe.cookTime = action.payload.cookTime;
          recipe.prepTime = action.payload.prepTime;
          recipe.ingredients = action.payload.ingredients;
        }
      });
    },
    removeRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export const { addRecipe, editRecipe, removeRecipe } = RecipeSlice.actions;
export default RecipeSlice.reducer;
