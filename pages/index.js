import Head from 'next/head';
import Project from '../components/projects';
import About from '../components/about';
import Resume from '../components/resume';
import Skills from '../components/skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Izhan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="leading-normal tracking-normal mx-auto w-full gradient bg-white dark:bg-gray-900">
        <section id="hero">
          <div className="container px-3 py-40 mx-auto flex flex-wrap flex-col md:flex-row items-center relative">
            <div className="absolute top-20 left-[30%] md:w-72 md:h-72 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob dark:hidden"></div>
            <div className="absolute top-40 left-[40%] md:w-72 md:h-72 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob dark:hidden animation-delay-2000"></div>
            <div className="absolute top-20 left-[45%] md:w-72 md:h-72 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob dark:hidden animation-delay-1000"></div>
            <div className="flex flex-col w-full justify-center items-center text-center">
              <h1 className="my-4 text-5xl md:text-6xl font-bold leading-tight text-center text-black dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 dark:text-transparent dark:bg-clip-text dark:animate-gradient">
                Mohammed Izhan
              </h1>
              <p className="leading-normal text-lg md:text-2xl mb-8 text-center text-black dark:text-white">
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
