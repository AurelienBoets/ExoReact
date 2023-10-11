import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Form = () => {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  let name = useRef();
  let description = useRef();
  const [task, setTask] = useState({ name: "", description: "" });
  useEffect(() => {
    if (searchParam.get("mode") === "edit" && searchParam.get("id") !== "") {
      axios
        .get(`http://localhost:5000/task/${searchParam.get("id")}`)
        .then((resp) => {
          setTask(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  const edit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/task/${searchParam.get("id")}`, {
      name: name.current.value,
      description: description.current.value,
    });
    navigate("/");
  };
  const add = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/task`, {
      name: name.current.value,
      description: description.current.value,
    });
    navigate("/");
  };
  return (
    <>
      <h1>
        {searchParam.get("mode") === "edit"
          ? `Modifier la tâche ${task.name}`
          : "Ajouter une tâche"}
      </h1>
      <form onSubmit={searchParam.get("mode") === "edit" ? edit : add}>
        <div className="ms-1 mb3 w-50">
          <label htmlFor="name" className="form-label">
            Titre
          </label>
          <input
            type="text"
            name="name"
            ref={name}
            className="form-control"
            defaultValue={task.name}
          />
        </div>
        <div className="ms-1 mb3 w-50">
          <label
            htmlFor="description"
            className="form-label"
            defaultValue={task.description}
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            ref={description}
            className="form-control"
            defaultValue={task.description}
          />
        </div>
        <button className="btn btn-primary ms-1 mt-3" type="submit">
          Valider
        </button>
        <button
          className="btn btn-danger ms-2 mt-3"
          type="button"
          onClick={() => navigate("/")}
        >
          Retour
        </button>
      </form>
    </>
  );
};

export default Form;
