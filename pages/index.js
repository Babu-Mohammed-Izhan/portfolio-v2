import Head from 'next/head';
import { useEffect } from 'react';
import Project from '../components/projects';
import About from '../components/about';
import Resume from '../components/resume';
import Skills from '../components/skills';

export default function Home() {
  useEffect(() => {
    const startup = async () => {
      const res = await fetch(
        'https://image-color-theme-backend.herokuapp.com'
      );
      const res2 = await fetch('https://websnippetbackend.vercel.app/');
    };

    startup();
  }, []);

  return (
    <div>
      <Head>
        <title>Izhan</title>
        <meta
          name="description"
          content="Full Stack Developer | Software Engineer | Computer Science Student"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://izhan.vercel.app/" />
        <meta property="og:title" content="Izhan" />
        <meta
          property="og:description"
          content="Full Stack Developer | Software Engineer | Computer Science Student"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dm8ogh4lv/image/upload/v1645540049/posrtfolioImages/Izhan_wfiids.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://izhan.vercel.app/" />
        <meta property="twitter:title" content="Izhan" />
        <meta
          property="twitter:description"
          content="Full Stack Developer | Software Engineer | Computer Science Student"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dm8ogh4lv/image/upload/v1645540049/posrtfolioImages/Izhan_wfiids.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="leading-normal tracking-normal mx-auto w-full gradient bg-white dark:bg-gray-900">
        <section
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
          id="hero"
        >
          <div className="container px-3 py-40 mx-auto flex flex-wrap flex-col md:flex-row items-center relative">
            <div className="absolute top-20 left-[20%] md:left-[30%] md:w-72 md:h-72 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl md:blur-2xl opacity-60 animate-blob dark:hidden"></div>
            <div className="absolute top-40 left-[30%] md:left-[40%] md:w-72 md:h-72 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl md:blur-2xl opacity-60 animate-blob dark:hidden animation-delay-2000"></div>
            <div className="absolute top-20 left-[40%] md:left-[50%] md:w-72 md:h-72 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl md:blur-2xl opacity-60 animate-blob dark:hidden animation-delay-1000"></div>
            <div className="flex flex-col w-full justify-center items-center text-center">
              <h1 className="my-4 text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-center text-black dark:gradient-text">
                Mohammed Izhan
              </h1>
              <p className="leading-normal text-lg md:text-xl lg:text-2xl mb-8 text-center text-black dark:text-white">
                Full Stack Developer | Software Engineer | Computer Science
                Student
              </p>
            </div>
          </div>
        </section>
        <About />
        <Project />
        <Skills />
        <Resume />
      </body>
    </div>
  );
}
