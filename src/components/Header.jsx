import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import React, { useState } from 'react';
import sun from './theme-icon/sun.png'
import moon from './theme-icon/moon.png'

const Header = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';

	document.body.className = themeClass;
	return (
		<header className='my-4 py-2 shadow-md'>
			<div className='flex gap-4 justify-between mx-10'>
				<h1 className={`text-center text-2xl font-bold ${themeClass === 'light-theme' ? 'text-gray-800' : 'text-white'}`}>
					unFetch
				</h1>
				<nav>
					<ul className='flex gap-4 text-2xl'>
						<li>
							<button onClick={toggleTheme} >
								{isDarkMode ? <img src={sun} alt="Sun Icon" className="h-6" /> : <img src={moon} alt="Moon Icon" className="h-6" />}
							</button>
						</li>
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
			</div>
		</header>
	);
};

export default Header;
