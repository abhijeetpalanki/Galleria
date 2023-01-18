import { TfiGallery } from "react-icons/tfi";
import { MdAnimation } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="pt-10 flex flex-col justify-center items-center gap-2 md:flex-row md:justify-between text-white">
      <Link
        to="/"
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
      >
        <h1 className="text-xl font-burtons">#abhijeetpalankicreations</h1>
      </Link>
      <ul className="flex items-center">
        <li>
          <Link
            to="/art"
            className="ml-2 flex flex-row items-center cursor-pointer"
          >
            <TfiGallery className="text-2xl" />
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-2">
              Art
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/animations"
            className="ml-2 flex flex-row items-center cursor-pointer"
          >
            <MdAnimation className="text-2xl" />
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-2">
              Animations
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
