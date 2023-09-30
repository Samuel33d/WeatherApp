import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CardWeather from "./components/CardWeather";
import LoadApp from "./components/LoadApp";
import { BsFillMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

function App() {
  const [weather, setWeather] = useState(null);

  const [isLightMode, setIsLightMode] = useState(true);

  const handleChangeTheme = () => {
    setIsLightMode(!isLightMode);
  };

  let weatherBg = {
    "01n": "/bgSunDay.jpeg",
    "01d": "/bgSunDay.jpeg",
    "02d": "/bgfew-clouds.jpeg",
    "03d": "/bgscattered-clouds.jpeg",
    "04d": "/bgbroken-clouds.jpeg",
    "04n": "/bgbroken-clouds.jpeg",
    "09d": "/bgshower-rain.jpeg",
    "10d": "/bgrain.jpeg",
    "10n": "/bgrain.jpeg",
    "11d": "/bgthunderstorm.jpeg",
    "13d": "/bgsnow.jpeg",
    "50d": "/bgmist.jpeg",
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
          ? { backgroundColor: "black" }
          : {
              backgroundImage: `url(${weatherBg[weather.weather[0].icon]})`,
            }
      }
      className={`${
        isLightMode ? "" : "dark"
      } font-['Lato'] flex flex-col justify-center items-center min-h-screen text-white  bg-top gap-6 sm:bg-cover ${
        weather === null ? "" : "p-3"
      }`}
    >
      {weather === null ? (
        <LoadApp />
      ) : (
        <>
          <button
            onClick={handleChangeTheme}
            className="bg-white dark:bg-black/40 p-3 rounded-[100%] transition-all"
          >
            {isLightMode ? (
              <BsFillMoonFill className="fill-black text-2xl" />
            ) : (
              <BsSunFill className="text-2xl" />
            )}
          </button>
          <CardWeather weather={weather} setWeather={setWeather} />
        </>
      )}
    </main>
  );
}

export default App;
