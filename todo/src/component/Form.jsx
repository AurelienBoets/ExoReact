import { useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

const Form = () => {
  let name = useRef("");
  let date = useRef("");
  let state = useRef(false);
  const [task, setTask] = useContext(TaskContext);

  const addTask = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        name: name.current.value,
        date: date.current.value,
        state: state.current.checked,
        id: Date.now(),
      },
    ]);
  };
  return (
    <form onSubmit={addTask}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" ref={name} />
      <label htmlFor="date">Deadline</label>
      <input type="date" name="date" ref={date} />
      <label htmlFor="state">Finish</label>
      <input type="checkbox" name="state" ref={state} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
