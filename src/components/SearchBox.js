import "../styles/SearchBox.scss";

const SearchBox = ({handleChange, handleClick}) => {
    return (
        <div className="search-box">
            <input type="text" placeholder="Find a character..." onChange={handleChange}/>
            <button className="search-button" onClick={handleClick}>Search</button>
        </div>
    )
}

export default SearchBox;