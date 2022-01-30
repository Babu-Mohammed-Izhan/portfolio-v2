import Image from 'next/image';

const projectCard = ({ data }) => {
  return (
    <div className="relative group h-full cursor-pointer shadow-md hover:shadow-xl transition duration-300 dark:shadow-none">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xs blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient invisible dark:visible"></div>
      <div className="h-full w-full flex flex-col flex-grow flex-shrink relative">
        {data.imgurl ? (
          <Image
            src={data.imgurl}
            height="500px"
            width="500px"
            alt="project-image"
          />
        ) : (
          ''
        )}
        <a
          href={data.url}
          className="h-full flex flex-wrap no-underline hover:no-underline"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-start justify-between flex-col bg-white dark:bg-gray-800 rounded-sm overflow-hidden p-6">
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
        </a>
      </div>
    </div>
  );
};

export default projectCard;
