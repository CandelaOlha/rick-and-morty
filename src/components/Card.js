import "../styles/Card.scss";

const Card = ({image, name, status, species, location}) => {
    return (
        <article className="character-card">
            <img src={image} />
            <div className="text-container">
                <h2>{name}</h2>
                <div className="character-details">
                    <div className={`status ${status === "Alive" ? "alive" : "dead"}`}></div>
                    <p>{status} - {species}</p>
                </div>
                <div>
                    <p className="location">Last known location:</p>
                    <p>{location}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;