import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Task = (props) => {
  const context = useContext(TaskContext);
  const foundTask = context[0].find((t) => t.id === props.id);
  return (
    <div>
      Name : {foundTask.name}
      <br />
      Due : {foundTask.date}
      <br />
      State : {foundTask.state ? "Finish" : "Remaining"}
      <br />
    </div>
  );
};

export default Task;
