const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col lg:flex-row py-6 items-center">
          <div className="flex-1 mb-6 text-black">
            <a
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:text-white no-underline hover:no-underline font-bold text-4xl"
              href="#"
            >
              Izhan
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 dark:text-white md:mb-6">
              Around the Web
            </p>
            <ul className="flex flex-col lg:flex-row items-center mb-6">
              <li className="mt-2 inline-block lg:mr-5 md:block ">
                <a
                  href="https://www.linkedin.com/in/babu-mohammed-izhan-3a327720b/"
                  className="no-underline text-gray-800 dark:text-white hover:text-purple-500"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block lg:mr-5 md:block ">
                <a
                  href="https://github.com/Babu-Mohammed-Izhan"
                  className="no-underline text-gray-800 dark:text-white hover:text-purple-500"
                >
                  Github
                </a>
              </li>
              <li className="mt-2 inline-block lg:mr-5 md:block ">
                <a
                  href="https://twitter.com/babu_izhan"
                  className="no-underline text-gray-800 dark:text-white hover:text-purple-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
