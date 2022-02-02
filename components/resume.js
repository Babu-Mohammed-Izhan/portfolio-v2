const Resume = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-easing="ease-in-quart"
      data-aos-duration="300"
      data-aos-once="true"
      className="container mx-auto text-center py-24 md:py-28 flex items-center flex-col w-full md:w-10/12 "
    >
      <h1 className="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-black dark:text-white">
        My Resume
      </h1>
      <div className="flex flex-col mt-10">
        <a
          href="https://drive.google.com/file/d/12dgxQriNlUBNEb3DxNhwvFUjmMaTZiM3/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-white dark:bg-purple-500 text-gray-900 dark:text-white font-bold text-2xl rounded-full my-2 py-4 shadow-xl focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out md:w-96 w-64">
            Resume
          </button>
        </a>
        <a
          href="mailto:babuizhan1234@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-white dark:bg-purple-500 text-gray-900 dark:text-white font-bold text-2xl rounded-full my-2 py-4 shadow-xl focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out md:w-96 w-64">
            Mail
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
