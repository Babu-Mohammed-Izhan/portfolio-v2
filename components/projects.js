import ProjectCard from "./projectCard";

const Project = () => {
  const projects = [
    {
      name: "Casity",
      description:
        "Casity is an mobile case e-commerce website where you can buy mobile cases for all the latest phone models.",
      url: "https://next-ecommerce-website.vercel.app/",
      github: "https://github.com/Babu-Mohammed-Izhan/next-ecommerce-website",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643555977/posrtfolioImages/casitywebsite_iuk721.png",
    },
    {
      name: "Chameleon",
      description:
        "Chameleon is a website where users can upload any image and get a color scheme matching the image. It gets the most common colors from the image and finds the best suitable color scheme from the available colors.",
      url: "https://image-theme-generator.vercel.app/",
      github: "https://github.com/Babu-Mohammed-Izhan/image-theme-generator",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643646027/themeImage/chameleon_b4mefm.png",
    },
    {
      name: "Personal Blog",
      description:
        "This is my personal blog created using Nextjs, Tailwind, and uses Sanity.io as the Content Management System.",
      url: "https://next-blog-xi-coral.vercel.app/",
      github: "https://github.com/Babu-Mohammed-Izhan/next-blog",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643554339/posrtfolioImages/personalblogwebsite_jvclal.png",
    },
    {
      name: "GPA and CGPA Calculator",
      description:
        "Website that calculates GPA and CGPA. Select the number of semesters you want to calculate and enter all the credits and points. It will calculate your GPA and CGPA. Created using React and Bootstrap and hosted on netlify.",
      url: "https://izhangpacalc.netlify.app/",
      github: "https://github.com/Babu-Mohammed-Izhan/gpa-calculator",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643558411/posrtfolioImages/gpaCalculator_wra5cf.png",
    },
    {
      name: "Github Stats",
      description:
        "Github Stats is a web application that shows all your github repositories and contributions in a chart.",
      url: "https://github-repo-timeline-xi.vercel.app/",
      github: "https://github.com/Babu-Mohammed-Izhan/github-repo-timeline",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643554338/posrtfolioImages/githubContributions_sa6h6x.png",
    },
    {
      name: "Snip",
      description:
        "Snip is a MERN stack web snippet application, created using React and Chakra UI. It uses a serverless function as it's backend, hosted on Vercel.",
      url: "https://websnip.netlify.app/",
      github: "https://github.com/Babu-Mohammed-Izhan/websnippet",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643554337/posrtfolioImages/Snipwebsite_mgkm4g.png",
    },
    {
      name: "Twitch Higher or Lower",
      description:
        "Twitch Higher or Lower is a guessing game of the earned amount of Twitch Streamers",
      url: "https://twitch-higher-lower.vercel.app/",
      github: "https://github.com/Babu-Mohammed-Izhan/twitch-higher-lower",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1684577829/posrtfolioImages/Screenshot_2023-05-20_at_3.46.07_PM_tku7z6.png",
    },
    {
      name: "Github Contribution Extension",
      description:
        "This is a google chrome extension in which you can change your github contributions graph chart to 23 premade themes.",
      url: "https://github.com/Babu-Mohammed-Izhan/github-contribution-theme-extension",
      github:
        "https://github.com/Babu-Mohammed-Izhan/github-contribution-theme-extension",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643787741/posrtfolioImages/GithubChromeExtension_goqsyx.png",
    },
    {
      name: "AnimeList",
      description:
        "AnimeList is a website that lists all the anime in order of popularity and it uses a third party API (Jikan API) to fetch the data of the anime",
      url: "https://izhananimelist.netlify.app/",
      github: "https://github.com/Babu-Mohammed-Izhan/animelist",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643554339/posrtfolioImages/Animelistwebsite_dpdvtk.png",
    },
    {
      name: "Typescript Express MongoDB Server Boilerplate",
      description:
        "This is a MVC Express API Boilerplate created using Typescript, and uses MongoDB as the Database.",
      github:
        "https://github.com/Babu-Mohammed-Izhan/typescript-express-server-template",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643646818/posrtfolioImages/typescript-template_arsami.png",
    },
  ];

  return (
    <section className="py-8 w-11/12 mx-auto ">
      <div className=" mx-auto flex flex-wrap pt-4 pb-12 text-black dark:text-white">
        <h1 className="w-full mb-10 text-5xl font-bold leading-tight text-center text-gray-800 dark:text-white">
          Projects
        </h1>
        <div className="w-10/12 md:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {projects.map((p) => {
            return <ProjectCard key={p.name} data={p} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
