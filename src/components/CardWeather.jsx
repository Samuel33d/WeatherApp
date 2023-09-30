import { useState } from "react";
import WeatherStats from "./WeatherStats";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

/* eslint-disable react/prop-types */
const CardWeather = ({ weather, setWeather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeTempUnit = (temp) => {
    if (isCelsius) {
      let tempCelsius = (temp - 273.15).toFixed(0);
      return `${tempCelsius}`;
    } else {
      let tempFahrenheit = (((temp - 273.15) * 9) / 5 + 32).toFixed(0);
      return `${tempFahrenheit}`;
    }
  };

  const handleChangeUnit = () => {
    setIsCelsius(!isCelsius);
    changeTempUnit(weather.main.temp);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const API_KEY = "de90cb527a5359d58a9cce5f2cb83064";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
    document.querySelector(".form").reset();
  };

  let weatherIcons = {
    "01n": "/public/weatherIcons/clear-sky.png",
    "01d": "/public/weatherIcons/clear-sky.png",
    "02d": "/public/weatherIcons/few-clouds.png",
    "03d": "/public/weatherIcons/scattered-clouds.png",
    "04d": "/public/weatherIcons/broken-clouds.png",
    "09d": "/public/weatherIcons/shower-rain.png",
    "10d": "/public/weatherIcons/rain.png",
    "10n": "/public/weatherIcons/rain.png",
    "11d": "/public/weatherIcons/thunderstorm.png",
    "13d": "/public/weatherIcons/snow.png",
    "50d": "/public/weatherIcons/mist.png",
  };

  return (
    <>
      {weather && (
        <section className="flex flex-col gap-5 sm:gap-10 text-center place-items-center max-w-[650px]">
          <form
            action=""
            className="form grid grid-cols-[1fr_auto] gap-2 text-black min-w-[300px] sm:w-[400px] shadow-2xl"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Weather in your city"
              className="rounded-full capitalize pl-3 "
              id="city"
            />
            <div className="relative grid place-items-center">
              <input
                type="submit"
                value=""
                className="bg-white w-6 h-6 p-5 rounded-full cursor-pointer z-10 opacity-80"
              />
              <FiSearch
                className="cursor-pointer absolute"
                onSubmit={handleSearch}
              />
            </div>
          </form>
          <h3 className="text-2xl  text-black font-bold">
            {weather.name}, {weather.sys.country}
          </h3>
          <div className=" grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-[1fr_auto]">
            {/*Sección superior */}
            <article className="grid relative grid-cols-2 bg-white/50 rounded-3xl p-5 pb-8 items-center min-w-[300px] sm:w-[400px] shadow-2xl">
              <h4 className="col-span-2 capitalize text-gray-600 font-bold sm:text-lg">
                {weather.weather[0].description}
              </h4>
              <span className="text-8xl  font-light text-black p-3">
                {changeTempUnit(weather.main.temp)}
              </span>
              <span
                className="unit text-3xl top-16
              sm:left-44 sm:top-24"
              >
                {isCelsius ? "°C" : "°F"}
              </span>
              <img
                src={`${weatherIcons[weather.weather[0].icon]}`}
                alt=""
                className="w-20 self-center place-self-end sm:place-self-center sm:w-28 pr-1"
              />
            </article>
            {/*Sección inferior */}
            <article className="bg-white/50 grid grid-cols-[repeat(3,1fr)] rounded-2xl px-4 py-3 text-black font-bold sm:grid-cols-1 sm:grid-rows-3 shadow-2xl ">
              <WeatherStats
                icon={"/weatherStatsIcons/wind.png"}
                value={weather.wind.speed}
                unit={"m/s"}
              />
              <div className="border-x-2 border-slate-600 px-4 py-5 flex item-center sm:border-x-0 sm:border-y-2 sm:px-0">
                <WeatherStats
                  icon={"/weatherStatsIcons/humidity.png"}
                  value={weather.main.humidity}
                  unit={"%"}
                />
              </div>
              <WeatherStats
                icon={"/weatherStatsIcons/pressure.png"}
                value={weather.main.pressure}
                unit={"hPa"}
              />
            </article>
          </div>
          <button
            className="bg-white self-center
            w-36 text-[#4580BA] py-1  font-bold rounded-2xl shadow-2xl"
            onClick={handleChangeUnit}
          >
            {isCelsius ? "Change to °F" : "Change to °C"}
          </button>
        </section>
      )}
    </>
  );
};
export default CardWeather;
