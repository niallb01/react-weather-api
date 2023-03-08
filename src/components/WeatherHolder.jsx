import React from "react";
import { modifyDate } from "../utils";
import Temp from "./Temp";
import Wind from "./Wind";
import Pressure from "./Pressure";
import Humidity from "./Humidity";
import Image from "./Image";
import Weather from "./Weather";

const WeatherHolder = (props) => {
  return (
    <>
      <div className="date">{modifyDate(props.date.toDateString())}</div>
      <Temp temp={props.temp} />
      <Image image={props.image} />
      <Weather description={props.description} />
      <Wind wind={props.wind} />
      <Humidity humidity={props.humidity} />
      <Pressure pressure={props.pressure} />
    </>
  );
};

export default WeatherHolder;
