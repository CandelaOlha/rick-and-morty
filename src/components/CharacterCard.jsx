import "../styles/CharacterCard.scss";
import PropTypes from "prop-types";

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
        <div className="character-container">
          <p className="character-title">First seen in:</p>
          <p className="character-text">{character.origin.name}</p>
        </div>
        <div className="character-container">
          <p className="character-title">Last known location:</p>
          <p className="character-text">{character.location.name}</p>
        </div>
      </div>
    </article>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
