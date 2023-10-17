import { createBrowserRouter } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import AuthForm from "./components/AuthForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeList />,
  },
  {
    path: "/recipe",
    element: <RecipeForm />,
  },
  {
    path: "/auth",
    element: <AuthForm />,
  },
]);

export default router;
