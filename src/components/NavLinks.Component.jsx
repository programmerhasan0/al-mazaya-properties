import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li className="">
        <Link to="/houses">Houses</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/careers">Careers</Link>
      </li>
    </>
  );
};

export default NavLinks;
