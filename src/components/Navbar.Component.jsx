import { Link } from "react-router-dom";
import NavLinks from "./NavLinks.Component";
import "../styles/components/Navbar.style.css";

const Navbar = () => {
  return (
    <div className="navbar bg-warning z-10 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            <NavLinks />
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="/images/OIP.png" className="h-[50px]" alt="Logo" />
          Al Mazaya
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-success text-white uppercase">
          login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
