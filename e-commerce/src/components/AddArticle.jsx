import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddArticle = () => {
  let name = useRef();
  let price = useRef();
  let description = useRef();
  const navigate = useNavigate();

  const newArticle = (e) => {
    e.preventDefault();
    axios.post(" http://localhost:5000/article", {
      name: name.current.value,
      description: description.current.value,
      price: price.current.value,
    });
    navigate("/");
  };
  return (
    <>
      <div className="bg-light container rounded mt-5 p-3">
        <form onSubmit={newArticle}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              ref={name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              ref={description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Prix
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              ref={price}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Valider
          </button>
        </form>
      </div>
    </>
  );
};

export default AddArticle;
