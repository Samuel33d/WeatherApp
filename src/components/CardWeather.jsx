import { useState } from "react";
import WeatherStats from "./WeatherStats";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TbArrowsSplit2 } from "react-icons/tb";

import FormWeather from "./FormWeather";

/* eslint-disable react/prop-types */
const CardWeather = ({ weather, setWeather }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  <CardWeather weather={weather} setWeather={setWeather} />;

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

  let weatherIcons = {
    "01n": "/clear-sky.png",
    "01d": "/clear-sky.png",
    "02d": "/few-clouds.png",
    "02n": "/few-clouds.png",
    "03d": "/scattered-clouds.png",
    "03n": "/scattered-clouds.png",
    "04d": "/broken-clouds.png",
    "04n": "/broken-clouds.png",
    "09d": "/shower-rain.png",
    "10d": "/rain.png",
    "10n": "/rain.png",
    "11d": "/thunderstorm.png",
    "13d": "/snow.png",
    "50d": "/mist.png",
  };

  return (
    <>
      {weather && (
        <section className="flex flex-col gap-5 sm:gap-10 text-center place-items-center max-w-[650px] z-50">
          <FormWeather setWeather={setWeather} />
          <h3 className="text-2xl  text-black font-bold dark:text-white sm:text-[32px] ">
            {weather.name}, {weather.sys.country}
          </h3>
          <div className=" grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-[1fr_auto]">
            {/*Sección superior */}
            <article className="grid relative grid-cols-[1fr_1fr] bg-white/50 rounded-3xl p-5 pb-8  min-w-[300px] sm:w-[480px] box-shadow transition-colors dark:bg-zinc-500/80">
              <h4 className="col-span-2 capitalize text-gray-600 text-lg font-medium sm:text-2xl dark:text-white">
                {weather.weather[0].description}
              </h4>
              <span className="text-8xl sm:text-9xl  font-light text-black p-3 sm:px-10 dark:text-white">
                {changeTempUnit(weather.main.temp)}
              </span>
              <span
                className="unit text-5xl top-16 left-29
              sm:left-52 sm:top-28 dark:text-white"
              >
                {isCelsius ? "°C" : "°F"}
              </span>
              <img
                src={`${weatherIcons[weather.weather[0].icon]}`}
                alt=""
                className="w-20 self-center place-self-end sm:place-self-center sm:w-28 pr-1 "
              />
            </article>
            {/*Sección inferior */}
            <article className="bg-white/50 grid grid-cols-[repeat(3,1fr)] rounded-2xl px-4 py-3 text-black font-bold sm:grid-cols-1 box-shadow sm:grid-rows-3 transition-colors dark:text-white dark:bg-zinc-500/80">
              <WeatherStats
                icon={<FaWind />}
                value={weather.wind.speed}
                unit={"m/s"}
              />
              <div className="border-x-2 border-slate-600 px-2 py-5 flex item-center sm:border-x-0 sm:border-y-2 sm:px-0 dark:border-slate-100">
                <WeatherStats
                  icon={<WiHumidity />}
                  value={weather.main.humidity}
                  unit={"%"}
                />
              </div>

              <WeatherStats
                icon={<TbArrowsSplit2 />}
                value={weather.main.pressure}
                unit={"hPa"}
              />
            </article>
          </div>
          <button
            className="box-shadow bg-white self-center
            w-36 text-[#4580BA] py-[8px]  font-medium rounded-[3rem]  dark:text-white dark:bg-[#4580BA] transition-colors "
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
