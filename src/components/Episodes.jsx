import "../styles/Episodes.scss";
import { useState, useEffect } from "react";
import EpisodeCard from "./EpisodeCard";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results));
  }, [episodes]);

  return (
    <div className="episodes-main-view-container">
      <main className="episodes-main-view">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </main>
    </div>
  );
};

export default Episodes;
