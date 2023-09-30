import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CardWeather from "./components/CardWeather";
import LoadApp from "./components/LoadApp";

function App() {
  const [weather, setWeather] = useState(null);

  let weatherBg = {
    "clear sky": "/bgSunDay.jpeg",
    "few clouds": "/few-clouds.jpeg",
    "broken clouds": "/broken-clouds.jpeg",
    "overcast clouds": "/broken-clouds.jpeg",
    "shower rain": "/shower-rain.jpeg",
    "scattered clouds": "/scattered-clouds.jpeg",
    rain: "/rain.jpeg",
    "light rain": "/rain.jpeg",
    thunderstorm: "/thunderstorm.jpeg",
    snow: "/snow.jpeg",
    mist: "/mist.jpeg",
  };

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "de90cb527a5359d58a9cce5f2cb83064";
    const lang = "en";
    const API_WEATHER_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}`;

    axios
      .get(API_WEATHER_ENDPOINT)
      .then(({ data }) => setTimeout(() => setWeather(data), 500))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main
      style={
        weather === null
          ? console.log("no")
          : {
              backgroundImage: `url(${
                weatherBg[weather.weather[0].description]
              })`,
            }
      }
      className={`font-['Lato'] flex flex-col justify-center items-center min-h-screen text-white  bg-top gap-6 sm:bg-cover ${
        weather === null ? "" : "p-3"
      }`}
    >
      {weather === null ? (
        <LoadApp />
      ) : (
        <CardWeather weather={weather} setWeather={setWeather} />
      )}
    </main>
  );
}

export default App;
