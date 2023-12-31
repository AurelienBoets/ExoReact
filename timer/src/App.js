import { useRef, useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Timer from "./component/Timer";

function App() {
  const [timer, setTimer] = useState([]);
  let nbTimer = useRef(0);

  const addTimer = (time, name) => {
    if (nbTimer.current < 5) {
      ++nbTimer.current;
      setTimer([
        ...timer,
        {
          time: time,
          name: name,
        },
      ]);
    }
  };

  return (
    <div>
      <Form addTimer={addTimer} nbTimer={nbTimer} />
      {timer.map((element, index) => (
        <Timer name={element.name} time={element.time} key={index} />
      ))}
    </div>
  );
}

export default App;
