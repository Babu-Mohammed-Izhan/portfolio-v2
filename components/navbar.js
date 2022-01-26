import Link from 'next/link';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

const Navbar = ({ mode, setMode }) => {
  const [hidden, setHidden] = useState(true);

  const handleToggle = () => {
    setHidden(!hidden);
  };
  return (
    <nav className="bg-white shadow dark:bg-gray-900">
      <div
        className="
    container
    px-6
    py-3
    mx-auto
    md:flex md:justify-between md:items-center
  "
      >
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a
                className="
              bg-clip-text text-transparent
               bg-gradient-to-r 
               from-blue-500 
               to-purple-500
          text-xl
          font-bold
          dark:text-white
          md:text-2xl
          hover:to-purple-400
          hover:from-blue-400
        "
              >
                Izhan
              </a>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="
          text-gray-500
          dark:text-gray-200
          hover:text-gray-600
          dark:hover:text-gray-400
          focus:outline-none focus:text-gray-600
          dark:focus:text-gray-400
        "
              aria-label="toggle menu"
              onClick={() => handleToggle()}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`items-center md:flex ${hidden ? 'hidden' : ''}`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link href="#">
              <a
                className="
                pt-1
          my-2
          text-gray-700
          dark:text-gray-200
          hover:text-indigo-500
          dark:hover:text-indigo-400
          md:mx-4 md:my-0
        "
              >
                Home
              </a>
            </Link>

            <Link href="#about">
              <a
                className="
                pt-1
              my-2
          text-gray-700
          dark:text-gray-200
          hover:text-indigo-500
          dark:hover:text-indigo-400
          md:mx-4 md:my-0
        "
              >
                About
              </a>
            </Link>
            <Link href="#projects">
              <a
                className="
                pt-1
              my-2
          text-gray-700
          dark:text-gray-200
          hover:text-indigo-500
          dark:hover:text-indigo-400
          md:mx-4 md:my-0
        "
              >
                Projects
              </a>
            </Link>
            <Link href="#skills">
              <a
                className="
                pt-1
              my-2
          text-gray-700
          dark:text-gray-200
          hover:text-indigo-500
          dark:hover:text-indigo-400
          md:mx-4 md:my-0
        "
              >
                Skills
              </a>
            </Link>
            <Switch
              checked={mode}
              onChange={setMode}
              className={`${mode ? 'bg-purple-900' : 'bg-purple-600'}
          relative inline-flex flex-shrink-0 h-7 w-14 md:ml-3 mt-2 md:mt-1 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${mode ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none h-6 w-6 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 flex item-center justify-center pt-1`}
              >
                {mode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </span>
            </Switch>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
