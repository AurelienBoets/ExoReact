import { useState } from "react";
import ContactContext from "../context/ContactContext";
import { RouterProvider } from "react-router-dom";
import router from "../app-routing";

const State = () => {
  const [contact, setContact] = useState([]);
  return (
    <ContactContext.Provider value={[contact, setContact]}>
      <RouterProvider router={router} />
    </ContactContext.Provider>
  );
};

export default State;
