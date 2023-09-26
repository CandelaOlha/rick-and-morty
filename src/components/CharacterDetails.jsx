import "../styles/CharacterDetails.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CharacterDetails = () => {
  const params = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, []);

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
    <article className="character-details-container">
      <div className="character-details">
        <img
          className="character-image"
          src={character.image}
          alt={character.name}
        />
        <div className="character-info">
          <h3 className="character-name">{character.name}</h3>
          <div className={`character-status-container ${addStatusColor()}`}>
            <p>
              <b>{character.status}</b>
            </p>
          </div>
          <p className="character-info-text">
            <b>Species:</b> {character.species}
          </p>
          <p className="character-info-text">
            <b>Gender:</b> {character.gender}
          </p>
          <p className="character-info-text">
            <b>Origin:</b> {character.origin.name}
          </p>
          <p className="character-info-text">
            <b>Location:</b> {character.location.name}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CharacterDetails;
