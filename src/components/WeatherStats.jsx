// eslint-disable-next-line react/prop-types
const WeatherStats = ({ icon, value, unit }) => {
  return (
    <div className="flex gap-1 justify-center items-center px-2 sm:py-2">
      <span className="text-2xl sm:text-3xl">{icon}</span>
      <span>
        {value}
        {unit}
      </span>
    </div>
  );
};
export default WeatherStats;
