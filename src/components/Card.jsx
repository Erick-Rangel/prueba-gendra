import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ characters }) => {
  return (
    <div>
      {characters?.map((character) => (
      <Link to={`/details/${character.id}`}>
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h3>{character.name}</h3>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.type}</p>
        </div>
      </Link>
      ))}
    </div>
  );
};
