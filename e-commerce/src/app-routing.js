import { createBrowserRouter, redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Panier from "./components/Panier";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";

const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return redirect("/");
  } else if (user.role === "ADMIN") {
    return true;
  } else {
    return redirect("/");
  }
};

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
        loader: () => isAdmin(),
      },
    ],
  },
]);

export default router;
