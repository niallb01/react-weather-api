const Humidity = (props) => {
  return (
    <p className="humidity">
      Humidity: <span className="value">{props.humidity}%</span>
    </p>
  );
};

export default Humidity;
