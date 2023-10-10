import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContactContext from "../context/ContactContext";

const ContactList = () => {
  const [contact] = useContext(ContactContext);
  const navigate = useNavigate();
  if (contact.length === 0) {
    return (
      <div>
        <button onClick={() => navigate("/contact/add")}>Add</button>
        <p>Aucun données dans la base.</p>
      </div>
    );
  }
  return (
    <div>
      {contact.map((element) => (
        <div key={element.id}>
          <h5>{element.firstName + " " + element.lastName}</h5>
          <hr />
          <ul>
            <li>Email: {element.mail}</li>
            <li>{element.phone}</li>
          </ul>
          <button
            onClick={() => navigate(`/contact/edit/${element.id}?mode=edit`)}
          >
            Edit
          </button>
          <button
            onClick={() =>
              navigate(`/contact/delete/${element.id}?mode=delete`)
            }
          >
            Delete
          </button>
        </div>
      ))}
      <button onClick={() => navigate("/contact/add")}>Add</button>
    </div>
  );
};

export default ContactList;
