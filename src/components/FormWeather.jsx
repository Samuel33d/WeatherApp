import { FiSearch } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const FormWeather = ({ handleSearch }) => {
  return (
    <form
      action=""
      className="form grid grid-cols-[1fr_auto] gap-3 text-black min-w-[320px] sm:w-[500px]  "
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Weather in your city"
        className="rounded-full capitalize pl-3 
      transition-colors 
      bg-white/70 text-black dark:text-white box-shadow py-3  backdrop-blur-1x dark:bg-zinc-500/80 "
        id="city"
      />
      <div className="relative grid place-items-center">
        <input
          type="submit"
          value=""
          className="bg-white/70 w-6 h-6 p-5 rounded-full cursor-pointer dark:bg-zinc-500/80 transition-colors box-shadow "
        />
        <FiSearch
          className="cursor-pointer absolute dark:text-white  "
          onSubmit={handleSearch}
        />
      </div>
    </form>
  );
};
export default FormWeather;
