import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactList />,
      },
      {
        path: "/contact/add",
        element: <ContactForm />,
      },
      {
        path: "/contact/edit/:contactId",
        element: <ContactForm />,
      },
      {
        path: "/contact/delete/:contactId",
        element: <ContactForm />,
      },
    ],
  },
]);

export default router;
