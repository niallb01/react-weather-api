const Pressure = (props) => {
  return (
    <p className="pressure">
      Pressure: <span className="value">{props.pressure}mb</span>
    </p>
  );
};

export default Pressure;
