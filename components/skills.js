const Skill = () => {
  return (
    <section
      className="py-20  w-full md:w-10/12 mx-auto text-black dark:text-white"
      id="skills"
    >
      <div className="container mx-auto flex flex-wrap py-12 text-black dark:text-white">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
          Skills
        </h1>
        <div className="w-full md:w-1/3 p-3 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white dark:bg-gray-900 rounded-t rounded-b-none overflow-hidden shadow">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <p className="w-full  text-xs md:text-sm px-6">
                xGETTING STARTED
              </p>
              <div className="w-full font-bold text-xl  px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
