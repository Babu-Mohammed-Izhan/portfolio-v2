import Image from 'next/image';

const projectCard = ({ data }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
      className="relative group cursor-pointer shadow-xl dark:shadow-none"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xs blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient invisible dark:visible"></div>
      <a
        href={data.url ? data.url : data.github}
        className="flex flex-col no-underline hover:no-underline relative"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col">
          {data.imgurl ? (
            <Image
              src={data.imgurl}
              height="300px"
              width="540px"
              className="aspect-video object-cover"
              alt="project-image"
            />
          ) : (
            ''
          )}

          <div className="min-h-[20rem] flex items-start justify-between flex-col bg-white dark:bg-gray-800 rounded-sm overflow-hidden p-6">
            <div>
              <h1 className=" font-bold text-xl text-gray-800 dark:text-white">
                {data.name}
              </h1>
              <p className="text-gray-800 dark:text-white text-base my-5">
                {data.description}
              </p>
            </div>
            {data.url ? (
              <a
                href={data.url}
                className="no-underline hover:underline md:hidden mb-4 dark:text-purple-400 dark:hover:text-purple-200 text-purple-700 hover:text-purple-400"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            ) : (
              ''
            )}

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
