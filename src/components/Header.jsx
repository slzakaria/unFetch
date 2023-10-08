import { useState } from 'react';
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

  return (
    <header className={`my-4 py-2 shadow-md ${themeClass}`}>
      <div className='flex gap-4 justify-between mx-10'>
        <h1 className='text-center text-2xl font-bold text-gray-800'>unFecth</h1>
        <nav>
          <ul className='flex gap-4 text-2xl'>
            <li>
              <a href='https://github.com/Zackaria-Slimane' target='_blank'>
                <FaSquareGithub />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/gitignorer' target='_blank'>
                <FaSquareXTwitter />
              </a>
            </li>
          </ul>
        </nav>
        <button className='toggle-button' onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
