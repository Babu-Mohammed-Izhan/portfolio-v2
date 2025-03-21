import SkillCard from "./skillCard";

const Skill = () => {
  const icons = [
    {
      name: "Typescript",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643616235/posrtfolioImages/typescript-icon_rahkor.png",
    },
    {
      name: "Javascript",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643615638/posrtfolioImages/javascript_l4fwtj.png",
    },
    {
      name: "React",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643615638/posrtfolioImages/react_qlp3lp.png",
    },
    {
      name: "Redux",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643615638/posrtfolioImages/redux_tbj81x.png",
    },
    {
      name: "Next",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643618266/posrtfolioImages/68747470733a2f2f73656261737469616e2d676f6d657a2e636f6d2f6e6578746a732e706e67_tvv8ml.png",
    },
    {
      name: "React Native",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643615638/posrtfolioImages/react_qlp3lp.png",
    },
    {
      name: "Flutter",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1742210067/pngwing.com_asp5cc.png",
    },
    {
      name: "Express",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643618758/posrtfolioImages/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview-removebg-preview_wj0gkr.png",
    },
    {
      name: "HTML",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643615636/posrtfolioImages/html-5_enugya.png",
    },
    {
      name: "CSS",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643636342/posrtfolioImages/css-3_su3dzj-removebg-preview_rrxxju.png",
    },
    {
      name: "SCSS",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643615638/posrtfolioImages/sass_xwasyi.png",
    },
    {
      name: "Tailwind",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643616442/posrtfolioImages/Tailwind_CSS_Logo.svg_spbpio.png",
    },
    {
      name: "NodeJS",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643618358/posrtfolioImages/430-4309640_js-logo-nodejs-logo-clipart_uicjtp.png",
    },
    {
      name: "MongoDB",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643779653/posrtfolioImages/MongoDB-Emblem-removebg-preview_kf5cau_1_atdfel.png",
    },
    {
      name: "Postgres",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643618050/posrtfolioImages/745px-Postgresql_elephant.svg_iusf8f.png",
    },
    {
      name: "Jest",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643615638/posrtfolioImages/jest_faapi1.png",
    },
    {
      name: "Python",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1643615637/posrtfolioImages/python_llqx40.png",
    },
    {
      name: "Go",
      icon: "https://res.cloudinary.com/dm8ogh4lv/image/upload/v1742210069/pngwing.com_1_gaovld.png",
    },
  ];

  return (
    <section className="w-11/12 mx-auto text-black dark:text-white" id="skills">
      <div className="mx-auto flex flex-wrap py-12 text-black dark:text-white">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
          Skills
        </h1>
        <div className="w-10/12 md:w-9/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
          {icons.map((icon) => {
            return <SkillCard key={icon.name} data={icon} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
