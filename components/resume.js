const Resume = () => {
  return (
    <section className="container mx-auto text-center py-24 md:py-28 flex items-center flex-col w-full md:w-10/12 ">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-black dark:text-white">
        My Resume
      </h1>
      <button className="mx-4 bg-white text-gray-900 font-bold text-2xl rounded-full my-10 py-4 px-24 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        Resume
      </button>
    </section>
  );
};

export default Resume;
