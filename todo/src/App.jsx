import { useState } from "react";
import "./App.css";
import { TaskContext } from "./context/TaskContext";
import Form from "./component/Form";
import Task from "./component/Task";

function App() {
  const [task, setTask] = useState([]);
  return (
    <TaskContext.Provider value={[task, setTask]}>
      <Form />
      {task.map((element) => (
        <Task id={element.id} key={element.id} />
      ))}
    </TaskContext.Provider>
  );
}

export default App;
