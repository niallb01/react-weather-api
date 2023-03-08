const Temp = (props) => {
  return (
    <p className="temp">
      Temp: <span className="value">{props.temp}°c</span>
    </p>
  );
};

export default Temp;
