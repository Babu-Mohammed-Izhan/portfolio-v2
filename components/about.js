const About = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
      className="pb-12 w-11/12 mx-auto"
      id="about"
    >
      <div className="w-full md:w-9/12 mx-auto m-8 text-black dark:text-white">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center ">
          About
        </h1>
        <div className="flex flex-wrap">
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold  my-5">
              I have been a web developer since May 2021, but ever since I was
              19 years old I have had a passion for creating websites and making
              them beautiful. Everytime I would see a website it intrigued me
              and made me wonder how all of it worked.
            </h3>
            <h3 className="text-xl font-bold my-5">
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
