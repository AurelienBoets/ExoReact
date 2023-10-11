import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const TaskList = () => {
  const [task, setTask] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/task")
      .then((resp) => {
        setTask(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/task/${id}`)
      .then(() => {
        setTask(task.filter((t) => id !== t.id));
        console.log(task);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <div className="card">
        <div className="card-header">
          <h4 className="d-inline">Todo-list</h4>
          <span
            className="btn btn-primary ms-5 mb-1"
            onClick={() => {
              navigate("/form");
            }}
          >
            Ajouter
          </span>
        </div>
        <ul className="list-group list-group-flush">
          {task.map((t) => (
            <li className="list-group-item" key={t.id}>
              {t.name}
              <span
                className="btn btn-info p-1 ms-5"
                onClick={() => {
                  navigate(`/task/${t.id}`);
                }}
              >
                <i className="bi bi-eye"></i> Détails
              </span>
              <span
                className="btn btn-warning   p-1 ms-3"
                onClick={() => navigate(`/form?mode=edit&id=${t.id}`)}
              >
                <i className="bi bi-pencil-square"></i>
                Modifier
              </span>
              <span
                className="btn btn-danger  text-dark p-1 ms-3"
                onClick={() => deleteTask(t.id)}
              >
                <i className="bi bi-trash"></i>
                Supprimer
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default TaskList;
