import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useState } from "react";
import { capitalizeSentence } from "./utils";
import WeatherHolder from "./components/WeatherHolder";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [state, setState] = useState({
    weatherData: { daily: [] },
    input: "london",
  });

  const userLocation = (e) => {
    if (e.key === "Enter") {
      getApiData();
    }
    setState({ ...state, input: e.target.value });
  };

  const getApiData = async () => {
    try {
      const coordinates = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${state.input}&limit=1&appid=17a3e02a9cc47ed1eac90bc2f9c0012a`
      );

      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.data[0].lat}&lon=${coordinates.data[0].lon}&appid=17a3e02a9cc47ed1eac90bc2f9c0012a`
      );
      setState({ ...state, weatherData: weather.data });
    } catch (error) {
      toast.error("Your search result is not valid.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(async () => {
    getApiData();
    return () => setInterval(30 * 60 * 1000);
  }, []);

  const filtered = [...state.weatherData.daily];
  filtered.length = 6;

  var date = new Date();
  if (!filtered[0]) {
    return <p>Waiting for data</p>;
  }

  return (
    <>
      <ToastContainer />
      {state.weatherData.length === 0 && <h1>Please enter a valid city</h1>}
      <div className="title">
        <h1>5 Day Forecast</h1>
      </div>
      <div className="header">
        <h1>Location: {capitalizeSentence(state.input)}</h1>
      </div>

      <div className="input-holder">
        <input
          className="location-input"
          type="text"
          onKeyUp={(e) => {
            userLocation(e);
          }}
          placeholder="Enter Location:"
        ></input>
      </div>

      <div className="today card">
        <WeatherHolder
          date={date}
          image={filtered[0].weather[0].icon}
          temp={Math.round(filtered[0].temp.max - 273.15)}
          description={capitalizeSentence(filtered[0].weather[0].description)}
          wind={filtered[0].wind_speed}
          humidity={filtered[0].humidity}
          pressure={filtered[0].pressure}
        />
      </div>

      <div className="forecast">
        {filtered &&
          filtered.map((day, index) => {
            const date = new Date(day.dt * 1000);
            if (index === 0) {
              return;
            }
            return (
              <div key={index} className="forecast-cards card">
                <WeatherHolder
                  date={date}
                  image={day.weather[0].icon}
                  temp={Math.round(day.temp.max - 273.15)}
                  description={capitalizeSentence(day.weather[0].description)}
                  wind={day.wind_speed}
                  humidity={day.humidity}
                  pressure={day.pressure}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default App;
