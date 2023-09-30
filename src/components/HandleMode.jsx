import { BsFillMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

const HandleMode = ({ handleChangeTheme, isLightMode }) => {
  return (
    <button
      onClick={handleChangeTheme}
      className="bg-white/70 dark:bg-[#4580BA] box-shadow p-3 rounded-[100%] transition-all z-50"
    >
      {isLightMode ? (
        <BsFillMoonFill className="fill-black text-2xl" />
      ) : (
        <>
          <BsSunFill className="text-2xl" />
        </>
      )}
    </button>
  );
};
export default HandleMode;
