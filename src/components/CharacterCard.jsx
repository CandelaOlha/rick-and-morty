import "../styles/CharacterCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const addStatusColor = () => {
    if (character.status === "Alive") {
      return "alive";
    } else if (character.status === "Dead") {
      return "dead";
    } else {
      return "unknown";
    }
  };

  return (
    <Link to={`/characters/${character.name}`} className="character-card-link">
      <article className="character-card">
        <img
          className="character-image"
          src={character.image}
          alt={character.name}
        />
        <div className="character-info">
          <h3 className="character-name">{character.name}</h3>
          <div className="character-status">
            <div className={`character-status-color ${addStatusColor()}`}></div>
            <p className="character-status-text">
              {character.status} - {character.species}
            </p>
          </div>
          <div className="character-location-container">
            <p className="location-title">Last known location:</p>
            <p className="location-text">{character.location.name}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
