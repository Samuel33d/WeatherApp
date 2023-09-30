import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CardWeather from "./components/CardWeather";
import LoadApp from "./components/LoadApp";

function App() {
  const [weather, setWeather] = useState(null);
  console.log();
  let weatherBg = {
    "clear sky": "/public/weatherBg/bgSunDay.jpeg",
    "few clouds": "/public/weatherBg/few-clouds.jpeg",
    "broken clouds": "/public/weatherBg/broken-clouds.jpeg",
    "overcast clouds": "/public/weatherBg/broken-clouds.jpeg",
    "shower rain": "/public/weatherBg/shower-rain.jpeg",
    "scattered clouds": "/public/weatherBg/scattered-clouds.jpeg",
    rain: "/public/weatherBg/rain.jpeg",
    "light rain": "/public/weatherBg/rain.jpeg",
    thunderstorm: "/public/weatherBg/thunderstorm.jpeg",
    snow: "/public/weatherBg/snow.jpeg",
    mist: "/public/weatherBg/mist.jpeg",
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
      style={{
        backgroundImage: `url(${weatherBg[weather?.weather[0].description]})`,
      }}
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
