const Weather = (props) => {
  return (
    <p className="description">
      Description: <span className="value">{props.description}</span>
    </p>
  );
};

export default Weather;
