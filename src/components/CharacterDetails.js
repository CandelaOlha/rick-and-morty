import "../styles/CharacterDetails.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CharacterDetails = () => {
    const params = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then(res => res.json())
        .then(data => setCharacter(data));
    }, [])

    console.log(character)

    return (
        <article className="character-details">
            <img src={character.image} />
            <div className="text-details">
                <h2>{character.name}</h2>
                <p>{character.status} - {character.species}</p>
                <p>{character.gender}</p>
            </div>
        </article>
    )
}

export default CharacterDetails;