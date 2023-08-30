import "../styles/Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="homepage-link">
          <h1 className="page-title">Rick and Morty</h1>
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-menu-link">
              Characters
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/episodes" className="nav-menu-link">
              Episodes
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/locations" className="nav-menu-link">
              Locations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
