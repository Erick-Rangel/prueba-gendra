import React from 'react'
import { Link } from 'react-router-dom';

export const CardEpisodes = ({episode}) => {
  return (
    <div>
      <Link to={`/details/${episode.id}`}>
        <div key={episode.id}>
          <img src={episode.image} alt={episode.name} />
          <h3>{episode.name}</h3>
          <p>{episode.air_date}</p>
          <p>{episode.episode}</p>
          <p>{episode.characters.length}</p>
        </div>
        </Link>
            <span>{episode.characters.map((character) => (
              <Link to={`/details/${character.split("/").pop()}`}>
                <ul>
                  <li>{character}</li>
                </ul>
                  </Link>
            ))}
          </span> 
    </div>
  
  );
}
