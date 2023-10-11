import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Task = () => {
  const param = useParams();
  const id = param.id;
  const [task, setTask] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/task/${id}`)
      .then((resp) => {
        setTask(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const deleteTask = () => {
    axios
      .delete(`http://localhost:5000/task/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <div className="bg-dark container text-white rounded mt-5">
      <h1>{task.name}</h1>
      <hr />
      <div>
        <span>Nom de la tâche : {task.name}</span>
        <br />
        <span>Description : {task.description}</span>
      </div>
      <hr />
      <div className="pb-3">
        <span className="btn btn-info   p-1 ms-3" onClick={() => navigate(`/`)}>
          <i className="bi bi-house"></i>
          Accueil
        </span>
        <span
          className="btn btn-warning   p-1 ms-3"
          onClick={() => navigate(`/form?mode=edit&id=${id}`)}
        >
          <i className="bi bi-pencil-square"></i>
          Modifier
        </span>
        <span
          className="btn btn-danger  text-dark p-1 ms-3"
          onClick={() => deleteTask(id)}
        >
          <i className="bi bi-trash"></i>
          Supprimer
        </span>
      </div>
    </div>
  );
};

export default Task;
