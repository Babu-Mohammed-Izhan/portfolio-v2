const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col lg:flex-row py-6">
          <div className="flex-1 mb-6 text-black">
            <a
              className="text-purple-600 dark:text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              Izhan
            </a>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 dark:text-white md:mb-6">
              Around the Web
            </p>
            <ul className="flex flex-col lg:flex-row  mb-6">
              <li className="mt-2 inline-block mr-5 md:block ">
                <a
                  href="#"
                  className="no-underline text-gray-800 dark:text-white hover:text-purple-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2 inline-block mr-5 md:block ">
                <a
                  href="#"
                  className="no-underline text-gray-800 dark:text-white hover:text-purple-500"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block mr-5 md:block ">
                <a
                  href="#"
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
