import { useEffect, useState } from "react";

const Timer = (props) => {
  let timer = props.time;

  const formatTimer = (timer, name) => {
    let hour = 0,
      min = 0,
      sec = 0;
    if (timer / 3600 >= 1) {
      hour = Math.floor(timer / 3600);
    }
    timer %= 3600;
    if (timer / 60 >= 1) {
      min = Math.floor(timer / 60);
    }
    timer %= 60;
    sec = timer;
    return {
      name: name,
      hour: hour,
      min: min,
      sec: sec,
    };
  };
  const [time, setTime] = useState(formatTimer(timer, props.name));

  useEffect(() => {
    let interval = setInterval(() => {
      let sec = time.sec;
      let min = time.min;
      let hour = time.hour;
      if (sec !== 0) {
        sec = sec - 1;
      } else if (min !== 0) {
        min = min - 1;
        sec = 59;
      } else if (hour !== 0) {
        hour = hour - 1;
        min = 59;
        sec = 59;
      }
      const newTime = {
        name: props.name,
        hour: hour,
        min: min,
        sec: sec,
      };
      setTime(newTime);
    }, 1000);
    return () => {
      if (interval) {
        clearInterval(interval);
        interval = undefined;
      }
    };
  }, [time]);

  return (
    <div>
      {time.name} : {time.hour}:{time.min > 10 ? time.min : "0" + time.min}:
      {time.sec > 10 ? time.sec : "0" + time.sec}
    </div>
  );
};
export default Timer;
