import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Panier from "./components/Panier";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/panier",
        element: <Panier />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },
      {
        path: "/article/add",
        element: <AddArticle />,
      },
    ],
  },
]);

export default router;
