import "../styles/Characters.scss";
import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, [characters]);

  return (
    <div className="characters-main-view-container">
      <main className="characters-main-view">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </main>
    </div>
  );
};

export default Characters;
