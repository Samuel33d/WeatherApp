import axios from "axios";
import { FiSearch } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const FormWeather = ({ setWeather }) => {
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

  return (
    <form
      action=""
      className="form grid grid-cols-[1fr_auto] gap-3 text-black min-w-[320px] sm:w-[500px]"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Weather in your city"
        className=" placeholder:text-black/70 dark:placeholder:text-white/70        rounded-full capitalize pl-3 
      transition-colors 
      bg-white/70 text-black  dark:text-white box-shadow py-3  backdrop-blur-1x dark:bg-zinc-500/80"
        id="city"
      />
      <div className=" relative grid place-items-center">
        <FiSearch
          id="fiSearch"
          className="cursor-pointer absolute bg-white/70 w-11  h-11 p-3 rounded-full dark:bg-zinc-500/80 dark:text-white"
        />
        <input
          type="submit"
          value=""
          className="formCity  w-11  h-11 p-5 rounded-full z-10 cursor-pointer  transition-colors box-shadow"
        />
      </div>
    </form>
  );
};
export default FormWeather;
