import ProjectCard from "./projectCard";

const Project = () => {
  const projects = [
    {
      name: "Mowaridi — B2B Wholesale Marketplace",
      description:
        "Saudi B2B wholesale marketplace where retailers order stock from suppliers. I am the sole engineer on the Flutter customer app and have shipped features across the native iOS and Android builds, covering catalog, cart, checkout, orders and wallet.",
      url: "https://apps.apple.com/app/mowaridi/id6758908148",
      urlLabel: "App Store",
      github: "https://play.google.com/store/apps/details?id=com.mowaridi.mowaridi",
      githubLabel: "Google Play",
      imgurl: "/images/mowaridi.jpg",
    },
    {
      name: "Sary — B2B Wholesale Marketplace",
      description:
        "Sary is one of Saudi Arabia's largest B2B wholesale platforms, connecting retailers with suppliers. I shipped features into the native iOS (Swift) and Android (Kotlin) apps and the Angular web storefront, and owned release builds and App Store versioning.",
      url: "https://apps.apple.com/app/id1341656558",
      urlLabel: "App Store",
      github: "https://play.google.com/store/apps/details?id=com.sary.sary",
      githubLabel: "Google Play",
      imgurl: "/images/sary.jpg",
    },
    {
      name: "Mowaridi & Sary Driver",
      description:
        "Delivery operations app used by drivers for pickups, deliveries and cash collection. Both brands ship from a single Kotlin codebase through a brand and environment flavor matrix, each signed with its own Play upload key.",
      url: "https://play.google.com/store/apps/details?id=com.mowaridi.operation",
      urlLabel: "Mowaridi Driver",
      github: "https://play.google.com/store/apps/details?id=com.sary.operation",
      githubLabel: "Sary Driver",
      imgurl: "/images/driver.jpg",
    },
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
      name: "Github Contribution Extension",
      description:
        "This is a google chrome extension in which you can change your github contributions graph chart to 23 premade themes.",
      url: "https://github.com/Babu-Mohammed-Izhan/github-contribution-theme-extension",
      github:
        "https://github.com/Babu-Mohammed-Izhan/github-contribution-theme-extension",
      imgurl:
        "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643787741/posrtfolioImages/GithubChromeExtension_goqsyx.png",
    },
  ];

  return (
    <section className="py-8 w-11/12 mx-auto " id="projects">
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
