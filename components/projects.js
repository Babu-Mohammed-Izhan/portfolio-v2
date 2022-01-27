import ProjectCard from './projectCard';

const Project = () => {
  const projects = [
    {
      name: 'Snip',
      description:
        "Snip is a MERN stack web snippet application, created using React and Chakra UI. It uses a serverless function as it's backend, hosted on Vercel.",
      url: 'https://websnip.netlify.app/',
      github: 'https://github.com/Babu-Mohammed-Izhan/websnippet',
    },
    {
      name: 'Ripple',
      description:
        'Ripple is a real time crypto currency convertor, created using React and Tailwind, it shows you a chart with the history of prices created using Recharts. ',
      url: 'https://ripple-nine.vercel.app/',
      github: 'https://github.com/Babu-Mohammed-Izhan/cryptoconverter',
    },
    {
      name: 'AnimeList',
      description:
        'AnimeList is a website that lists all the anime in order of popularity and it uses a third party API (Jikan API) to fetch the data of the anime',
      url: 'https://izhananimelist.netlify.app/',
      github: 'https://github.com/Babu-Mohammed-Izhan/animelist',
    },
    {
      name: 'ChatApp',
      description:
        'This is a Chat Application created using React and uses Firebase V9 as the backend. Sign In using your google account to chat with others.',
      url: 'https://breathe-chatapp.herokuapp.com/',
      github: 'https://github.com/Babu-Mohammed-Izhan/breatheChatApp',
    },
    {
      name: 'GPA and CGPA Calculator',
      description:
        'Website that calculates GPA and CGPA. Select the number of semesters you want to calculate and enter all the credits and points. It will calculate your GPA and CGPA. Created using React and Bootstrap and hosted on netlify.',
      url: 'https://izhangpacalc.netlify.app/',
      github: 'https://github.com/Babu-Mohammed-Izhan/gpa-calculator',
    },
    {
      name: 'Personal Blog',
      description:
        'This is my personal blog created using Nextjs, Tailwind, and uses Sanity.io as the Content Management System.',
      url: 'https://next-blog-xi-coral.vercel.app/',
      github: 'https://github.com/Babu-Mohammed-Izhan/next-blog',
    },
    {
      name: 'Quizz Me Not',
      description:
        'Quizz Me Not is a full stack quiz website. In this you can enter your name and play the quiz. The scores for it are displayed at the end in a leaderboard.',
      url: 'https://quizz-me-not.herokuapp.com/',
      github: 'https://github.com/Babu-Mohammed-Izhan/Quiz-App-Frontend',
    },
    {
      name: 'Typescript Express MongoDB Server Boilerplate',
      description:
        'This is a MVC Express API Boilerplate created using Typescript, and uses MongoDB as the Database.',
      github:
        'https://github.com/Babu-Mohammed-Izhan/typescript-express-server-template',
    },
  ];

  return (
    <section className="py-8 w-full md:w-10/12 mx-auto ">
      <div className=" mx-auto flex flex-wrap pt-4 pb-12 text-black dark:text-white">
        <h1 className="w-full mb-10 text-5xl font-bold leading-tight text-center text-gray-800 dark:text-white">
          Projects
        </h1>
        <div className="w-10/12 mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {projects.map((p) => {
            return <ProjectCard key={p.name} data={p} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
