const LoadApp = () => {
  return (
    <section className="bg-neutral-700 min-h-screen min-w-full grid place-items-center p-4">
      <div className="flex flex-col place-items-center ">
        <img className="w-30" src="/cloudLoad.png" alt="cloud" />
        <h2 className="text-center text-3xl py-3 font-normal ">Weather App</h2>
        <img
          className="py-1 px-4 bg-white rounded-2xl"
          src="/groupLoad.png"
          alt="group"
        />
      </div>
    </section>
  );
};
export default LoadApp;
