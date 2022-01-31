import Image from 'next/image';

const projectCard = ({ data }) => {
  return (
    <div className="relative group cursor-pointer shadow-md hover:shadow-xl transition duration-300 dark:shadow-none">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xs blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient invisible dark:visible"></div>
      <a
        href={data.url}
        className="flex flex-col no-underline hover:no-underline relative"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col">
          {data.imgurl ? (
            <Image
              src={data.imgurl}
              height="300px"
              width="530px"
              alt="project-image aspect-video"
            />
          ) : (
            ''
          )}

          <div className="h-80 flex items-start justify-between flex-col bg-white dark:bg-gray-800 rounded-sm overflow-hidden p-6">
            <div>
              <h1 className=" font-bold text-xl text-gray-800 dark:text-white">
                {data.name}
              </h1>
              <p className="text-gray-800 dark:text-white text-base my-5">
                {data.description}
              </p>
            </div>

            <a
              href={data.github}
              className="no-underline hover:underline mb-4 dark:text-purple-400 dark:hover:text-purple-200 text-purple-700 hover:text-purple-400"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default projectCard;
