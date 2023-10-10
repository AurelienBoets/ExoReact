import { useContext, useRef } from "react";
import ContactContext from "../context/ContactContext";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ContactForm = () => {
  const [contact, setContact] = useContext(ContactContext);
  const param = useParams();
  const [serachParams] = useSearchParams();
  const mode = serachParams.get("mode");
  let btn = "Ajouter";
  const navigate = useNavigate();
  let value = {
    firstName: "",
    lastName: "",
    mail: "",
    phone: "",
  };
  let isDisable = false;
  if (mode === "delete") {
    isDisable = true;
    btn = "Supprimer";
  }
  if (mode === "edit") {
    btn = "Modifier";
  }

  if (mode === "delete" || mode === "edit") {
    value = contact.find((c) => c.id === parseInt(param.contactId));
  }
  const firstName = useRef();
  const lastName = useRef();
  const mail = useRef();
  const phone = useRef();
  const addContact = (e) => {
    e.preventDefault();
    if (mode === null) {
      setContact([
        ...contact,
        {
          id: Date.now(),
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          mail: mail.current.value,
          phone: phone.current.value,
        },
      ]);
    } else if (mode === "delete") {
      setContact(contact.filter((c) => c.id !== parseInt(param.contactId)));
    } else if (mode === "edit") {
      const newContact = contact.filter(
        (c) => c.id !== parseInt(param.contactId)
      );
      newContact.push({
        id: parseInt(param.contactId),
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        mail: mail.current.value,
        phone: phone.current.value,
      });
      setContact(newContact);
    }
    navigate("/contact");
  };
  return (
    <form onSubmit={addContact}>
      <label htmlFor="firstName">Prénom</label>
      <input
        type="text"
        name="firstName"
        ref={firstName}
        defaultValue={value.firstName}
        disabled={isDisable}
      />
      <label htmlFor="lastName">Nom</label>
      <input
        type="text"
        name="lastName"
        ref={lastName}
        defaultValue={value.lastName}
        disabled={isDisable}
      />
      <label htmlFor="mail">Adresse mail</label>
      <input
        type="email"
        name="mail"
        ref={mail}
        defaultValue={value.mail}
        disabled={isDisable}
      />
      <label htmlFor="phone">Téléphone</label>
      <input
        type="text"
        name="phone"
        ref={phone}
        defaultValue={value.phone}
        disabled={isDisable}
      />
      <button>{btn}</button>
    </form>
  );
};

export default ContactForm;
