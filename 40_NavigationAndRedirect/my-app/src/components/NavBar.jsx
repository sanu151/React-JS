import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/Blogs" className="nav-link">
        Blogs
      </NavLink>
    </nav>
  );
};

export default NavBar;
