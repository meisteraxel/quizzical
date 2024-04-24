const Welcome = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <h1 className="font-karla-bold text-3xl text-[#293264]">Quizzical</h1>
        <h2 className="font-inter text-base text-[#293264] mt-2">
          Start the quiz by clicking on the button!
        </h2>
        <button className="font-inter text-base text-white bg-[#4d5b9e] rounded-2xl px-3 py-4 w-48 mt-8">
          Start quiz
        </button>
      </div>
    </>
  );
};

export default Welcome;
