import "../styles/Footer.scss";
import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <p className="credits">Developed with 💪 by Candela Olha</p>
            <ul className="social-media">
                <li className="item">
                    <a href="https://github.com/CandelaOlha" target="_blank" className="link">
                        <FaGithub />
                    </a>
                </li>
                <li className="item">
                    <a href="https://www.linkedin.com/in/candela-olha/" target="_blank" className="link">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className="item">
                    <a href="mailto:olhacandela@gmail.com" target="_blank" className="link">
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;