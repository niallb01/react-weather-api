const Wind = (props) => {
  return (
    <p className="wind">
      Wind speed: <span className="value">{props.wind}mph</span>
    </p>
  );
};

export default Wind;
