import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Form = (props) => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [birthDate, setBirthDate] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" onClick={handleShow} className="ms-2 mt-1">
        Add User
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => props.addUser(e, firstName, lastName, birthDate)}
        >
          <div className="m-3">
            <label htmlFor="firstName" className="form-label">
              Firstname
            </label>
            <input
              type="text"
              name="firstName"
              onInput={(e) => setFirstName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="m-3">
            <label htmlFor="lastName" className="form-label">
              Lastname
            </label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onInput={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="m-3">
            <label htmlFor="birthDate" className="form-label">
              Birth date
            </label>
            <input
              className="form-control"
              type="date"
              name="birthDate"
              onInput={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div className="d-grid  gap-2 ms-3 mb-3 me-3">
            <button className="btn btn-success" type="submit">
              Add
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default Form;
