// eslint-disable-next-line react/prop-types
const WeatherStats = ({ icon, value, unit }) => {
  return (
    <div className="flex gap-2 place-items-center">
      <img className="w-6" src={icon} alt="" />
      <span>
        {value}
        {unit}
      </span>
    </div>
  );
};
export default WeatherStats;
