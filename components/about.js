const About = () => {
  return (
    <section className="bg-white border-b" id="about">
      <div className="container mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          About
        </h1>
        <div className="flex flex-wrap">
          <div className="p-6 text-center">
            <h3 className="text-xl text-gray-800 font-bold leading-none my-3">
              I have been a web developer since May 2021, but ever since 12th
              Standard I have had a passion for creating websites and making
              them beautiful. Everytime I would see a website it intrigued me
              and made me wonder how all of it worked.
            </h3>
            <h3 className="text-xl text-gray-800 font-bold leading-none my-3">
              From then on I have been studying and working hard on improving my
              skills. There has been many roadblocks along the way, but my goals
              are very clear and I am determined I can reach them in the future.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
