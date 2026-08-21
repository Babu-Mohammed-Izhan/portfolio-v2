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
              I&apos;m a Senior Full Stack Engineer based in Doha, currently at
              SILQ. Over the past four years I&apos;ve built B2B commerce and
              logistics products end to end — Angular and React on the web,
              Flutter, Swift and Kotlin on mobile, and Go services behind them.
            </h3>
            <h3 className="text-xl font-bold my-5">
              Most recently I built a Flutter marketplace app as its only
              engineer, from an empty repository to production in ten weeks. It
              and its native siblings now carry 70% of all orders on the
              platform.
            </h3>
            <h3 className="text-xl font-bold my-5">
              What I enjoy most is holding one product across three platforms
              without it drifting — the same feature, idiomatic on each, shipped
              together.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
