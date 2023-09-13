import "../styles/EpisodeCard.scss";
import PropTypes from "prop-types";
import { BiMoviePlay } from "react-icons/bi";

const EpisodeCard = ({ episode }) => {
  return (
    <article className="episode-card">
      <BiMoviePlay className="episode-icon" />
      <div className="episode-info">
        <p className="episode-air-date">{episode.air_date}</p>
        <h3 className="episode-name">{episode.name}</h3>
      </div>
    </article>
  );
};

EpisodeCard.propTypes = {
  episode: PropTypes.object.isRequired,
};

export default EpisodeCard;
