import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className=" py-4 shadow-md">
      <div className="flex gap-4 justify-between mx-10">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          unFetch
        </h1>
        <nav>
          <ul className="flex gap-4 text-2xl">
            <li>
              <a href="https://github.com/Zackaria-Slimane" target="_blank">
                <FaSquareGithub />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/gitignorer" target="_blank">
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
