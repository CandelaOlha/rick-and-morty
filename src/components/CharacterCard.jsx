import "../styles/CharacterCard.scss";
import PropTypes from "prop-types";

const CharacterCard = ({ character }) => {
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
          <div className="character-status-color"></div>
          <p className="character-status-text">
            {character.status} - {character.species}
          </p>
        </div>
        <p className="character-origin-text">
          First seen in: {character.origin.name}
        </p>
        <p className="character-location-text">
          Last known location: {character.location.name}
        </p>
      </div>
    </article>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
