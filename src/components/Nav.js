import "../styles/Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="home-link">
                <h1 className="main-title">Rick and Morty</h1>
            </Link>
            <ul className="menu">
                <li>
                    <Link to="/" className="menu-link">Characters</Link>
                </li>
                <li>
                    <Link to="/episodes" className="menu-link">Episodes</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;