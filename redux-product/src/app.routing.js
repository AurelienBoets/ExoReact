import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Form from "./components/Form";

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },

      {
        path: "/product/form",
        element: <Form />,
      },
    ],
  },
]);

export default router;
