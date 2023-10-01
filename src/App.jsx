import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CardWeather from "./components/CardWeather";
import LoadApp from "./components/LoadApp";
import Overlay from "./components/Overlay";
import HandleMode from "./components/HandleMode";

function App() {
  const [weather, setWeather] = useState(null);

  const [isLightMode, setIsLightMode] = useState(true);

  const handleChangeTheme = () => {
    setIsLightMode(!isLightMode);
  };

  let weatherBg = {
    "01n": "/bgSunDay.webp",
    "01d": "/bgSunDay.webp",
    "02d": "/bgfew-clouds.webp",
    "02n": "/bgfew-clouds.webp",
    "03d": "/bgscattered-clouds.webp",
    "03n": "/bgscattered-clouds.webp",
    "04d": "/bgbroken-clouds.webp",
    "04n": "/bgbroken-clouds.webp",
    "09d": "/bgshower-rain.webp",
    "10d": "/bgrain.webp",
    "10n": "/bgrain.jpeg",
    "11d": "/bgthunderstorm.webp",
    "13d": "/bgsnow.webp",
    "50d": "/bgmist.webp",
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

  const err = () => {
    const lat = 40.71427;
    const lon = -74.00597;
    const API_KEY = "de90cb527a5359d58a9cce5f2cb83064";
    const lang = "en";
    const API_WEATHER_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}`;

    axios
      .get(API_WEATHER_ENDPOINT)
      .then(({ data }) => setTimeout(() => setWeather(data), 200))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, err);
  }, []);

  return (
    <main
      style={
        weather === null
          ? { backgroundColor: "black" }
          : {
              backgroundImage: `url(${weatherBg[weather.weather[0].icon]})`,
            }
      }
      className={`${
        isLightMode ? "" : "dark"
      } font-['Lato'] flex flex-col justify-center items-center min-h-screen text-white  bg-center gap-6 sm:bg-cover ${
        weather === null ? "" : "p-3"
      }`}
    >
      {weather === null ? (
        <LoadApp />
      ) : (
        <>
          {isLightMode ? "" : <Overlay />}
          <HandleMode handleChangeTheme={handleChangeTheme} />
          <CardWeather weather={weather} setWeather={setWeather} />
        </>
      )}
    </main>
  );
}

export default App;
