import "../styles/Characters.scss";
import Card from "./Card";
import SearchBox from "./SearchBox";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?name=${search}`)
        .then(res => res.json())
        .then(data => setCharacters(data.results));
    }, [search]);

    const handleChange = e => setInputValue(e.target.value);

    const handleClick = () => setSearch(inputValue);

    return (
        <main className="characters-section">
            <SearchBox 
            handleChange = {handleChange}
            handleClick = {handleClick}
            />
            <div className="cards-container">
                {characters.map(character => (
                <Link to={`characters/${character.id}`} className="card-link">
                    <Card 
                    image = {character.image}
                    name = {character.name}
                    status = {character.status}
                    species = {character.species}
                    location = {character.location.name}
                    />
                </Link>
                ))}
            </div>
        </main>
    )
}

export default Characters;