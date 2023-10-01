import CustomizedSwitches from "./Switch";

// eslint-disable-next-line react/prop-types
const HandleMode = ({ handleChangeTheme }) => {
  return (
    <button onClick={handleChangeTheme}>
      <CustomizedSwitches />
    </button>
  );
};
export default HandleMode;
