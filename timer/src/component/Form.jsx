import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  const add = (e) => {
    e.preventDefault();
    props.addTimer(time, name);
  };

  return (
    <>
      <form onSubmit={add}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onInput={(e) => setName(e.target.value)}
        />
        <label htmlFor="time">Time (sec)</label>
        <input
          type="number"
          name="time"
          onInput={(e) => {
            setTime(e.target.value);
          }}
        />
        <button>{">"}</button>
      </form>
    </>
  );
};

export default Form;
