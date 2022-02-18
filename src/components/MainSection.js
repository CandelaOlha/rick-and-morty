import "../styles/MainSection.scss";
import Card from "./Card";
import SearchBox from "./SearchBox";
import {useState, useEffect} from "react";

const MainSection = () => {
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
        <main className="main-section">
            <SearchBox 
            handleChange = {handleChange}
            handleClick = {handleClick}
            />
            <div className="cards-container">
                {characters.map(character => (
                <Card 
                image = {character.image}
                name = {character.name}
                status = {character.status}
                species = {character.species}
                location = {character.location.name}
                />
                ))}
            </div>
        </main>
    )
}

export default MainSection;