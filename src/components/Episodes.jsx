import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes } from "../actions";
import { CardEpisodes } from "./CardEpisodes";

export const Episodes = () => {

const dispatch = useDispatch();


    useEffect( ()=>{
        dispatch(getEpisodes());
    }, [dispatch]);

  const episodes = useSelector((state) => state.episodes);

  return (
    <div>
      <h1>Episodes</h1>
      <div>
        {episodes?.map((episode) => (
          <CardEpisodes key={episode?.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};
