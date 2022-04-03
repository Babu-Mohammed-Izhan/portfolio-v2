import Link from 'next/link';
import { useState } from 'react';

const Navbar = ({ mode, setMode }) => {
  const [hidden, setHidden] = useState(true);

  const handleToggle = () => {
    setHidden(!hidden);
  };
  return (
    <header className="bg-transparent dark:text-white p-3 backdrop-filter backdrop-blur-xl backdrop-saturate-40 sticky  top-0 z-10 font-medium text-black shadow-md">
      <div
        className="
    container
    px-6
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
              bg-gradient-to-r from-purple-600 to-pink-600
          text-2xl
          font-bold
          dark:text-white
          md:text-3xl
          hover:to-purple-400
          hover:from-pink-400
        "
              >
                Izhan
              </a>
            </Link>
          </div>

          <div className="flex item-center justify-center md:hidden">
            <button
              type="button"
              className="
              pt-2
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
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  if (mode) {
                    window.localStorage.setItem('izhantheme', false);
                  } else {
                    window.localStorage.setItem('izhantheme', true);
                  }
                }
                setMode(!mode);
              }}
              className="md:hidden bg-purple-400 cursor-pointer h-8 w-8 ml-3 mt-2 md:mt-1 border-2 border-transparent rounded-lg "
            >
              {mode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto stroke-gray-800"
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
                  className="h-6 w-6 mx-auto stroke-gray-100"
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
            </button>
          </div>
        </div>

        <div className={`items-center md:flex ${hidden ? 'hidden' : ''}`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link href="#">
              <a
                className="
                md:pt-2
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
                md:pt-2
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
              md:pt-2
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
                md:pt-2
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
            <button
              onClick={() => {
                setMode(!mode);
                if (typeof window !== 'undefined') {
                  if (mode) {
                    window.localStorage.setItem('izhantheme', false);
                  } else {
                    window.localStorage.setItem('izhantheme', true);
                  }
                }
              }}
              className="hidden md:inline bg-purple-400 cursor-pointer h-8 w-8 md:ml-3 mt-2 md:mt-1 border-2 border-transparent rounded-lg "
            >
              {mode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto stroke-gray-900"
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
                  className="h-6 w-6 mx-auto stroke-gray-100"
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
