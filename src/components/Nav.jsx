import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="homepage-link">
          <h1 className="page-title">Rick and Morty</h1>
        </Link>
        <button className="switch-mode-button">
          <FaMoon className="switch-mode-icon" />
          <p className="switch-mode-text">Dark mode</p>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
