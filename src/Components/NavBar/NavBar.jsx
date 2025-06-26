import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-100 p-4 border-b border-gray-300 text-center">
      <Link className="mx-4 text-gray-600 hover:text-black" to="/">
        Home
      </Link>
      <Link className="mx-4 text-gray-600 hover:text-black" to="/projects">
        Projects
      </Link>
      <Link className="mx-4 text-gray-600 hover:text-black" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
