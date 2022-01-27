import SkillCard from './skillCard';

const Skill = () => {
  const icons = [
    {
      name: 'HTML',
      icon: 'icons/html-5.png',
    },
    {
      name: 'CSS',
      icon: 'icons/css-3.png',
    },
    {
      name: 'SCSS',
      icon: 'icons/sass.png',
    },
    {
      name: 'Bootstrap',
      icon: 'icons/Bootstrap.png',
    },
    {
      name: 'MUI',
      icon: '',
    },
    {
      name: 'Tailwind',
      icon: '',
    },
    {
      name: 'Javascript',
      icon: 'icons/javascript.png',
    },
    {
      name: 'Typescript',
      icon: '',
    },
    {
      name: 'React',
      icon: 'icons/react.png',
    },
    { name: 'Next', icon: 'icons/react.png' },
    {
      name: 'Express',
      icon: 'icons/expressjs.png',
    },
    {
      name: 'NodeJS',
      icon: 'icons/nodejs.png',
    },
    {
      name: 'MongoDB',
      icon: 'icons/mongodb.png',
    },
    {
      name: 'Postgres',
      icon: 'icons/mongodb.png',
    },
    {
      name: 'Redux',
      icon: 'icons/redux.png',
    },
    {
      name: 'Redux Saga',
      icon: 'icons/reduxsagalogo.png',
    },
    {
      name: 'GraphQl',
      icon: 'icons/graphql.png',
    },
    {
      name: 'Apollo GraphQl',
      icon: 'icons/graphql.png',
    },
    {
      name: 'Jest',
      icon: 'icons/jest.png',
    },
    {
      name: 'Mocha',
      icon: '',
    },
    {
      name: 'Cypress',
      icon: '',
    },
    {
      name: 'Python',
      icon: 'icons/python.png',
    },
  ];

  return (
    <section
      className="py-8 w-full md:w-10/12 mx-auto text-black dark:text-white"
      id="skills"
    >
      <div className="mx-auto flex flex-wrap py-12 text-black dark:text-white">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
          Skills
        </h1>
        <div className="w-10/12 mx-auto p-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          {icons.map((icon) => {
            return <SkillCard key={icon.name} data={icon} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
