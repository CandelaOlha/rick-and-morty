import "../styles/Footer.scss";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p className="author">Designed and developed with 💪 by Candela Olha</p>
      <ul className="social-media-icons">
        <li className="social-media-item">
          <a
            href="https://github.com/CandelaOlha"
            target="_blank"
            className="social-media-link"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="social-media-item">
          <a
            href="https://www.linkedin.com/in/candela-olha/"
            target="_blank"
            className="social-media-link"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="social-media-item">
          <a
            href="mailto:olhacandela@gmail.com"
            target="_blank"
            className="social-media-link"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
