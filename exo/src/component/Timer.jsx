const Timer = (props) => {
  return (
    <div key={props.index}>
      {props.name} : {props.time}
    </div>
  );
};
export default Timer;
