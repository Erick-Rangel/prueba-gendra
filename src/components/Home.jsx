import React, { useEffect} from "react";
import { getCharacters, getEpisodes } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { SearchBar } from "./SearchBar";
import { CardEpisodes } from "./CardEpisodes";
import { Paginated } from "./Paginated";
import { Episodes } from "./Episodes";

export const Home = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getEpisodes());
    dispatch(getCharacters());
  }, [dispatch]);

  
  const characters = useSelector((state) => state.characters);
  const episodes = useSelector((state) => state.episodes);
 

  return (
    <div>
      <h1>Home</h1>
      <SearchBar/>
      <h2>Characters</h2>

<Paginated  />

      <Card key={characters.id} characters={characters} />


      
      <Episodes episodes={episodes} />
     </div>
  );
};
