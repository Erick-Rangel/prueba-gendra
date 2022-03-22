import {
  GET_CHARACTERS,
  GET_EPISODES,
  GET_LOCATIONS,
  GET_SEARCH,
  PAGINATED,
  GENDER,
  STATUS, 
  SPECIES
} from "./types";

import axios from "axios";

export const getCharacters = () => async (dispatch) => {
  let url = `https://rickandmortyapi.com/api/character/?page=42`;
  let response = await axios.get(url);
  let info = response.data.info;
  dispatch({
    type: GET_CHARACTERS,
    payload: response.data.results,
    info: info,
  });
};

export const getPaginated = (pageNumber) => async (dispatch) => {
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let response = await axios.get(url);
  let info = response.data.info;
  dispatch({
    type: PAGINATED,
    payload: response.data.results,
    info: info,
  });
};

export const getEpisodes = () => async (dispatch) => {
  let url = `https://rickandmortyapi.com/api/episode/`;
  let response = await axios.get(url);
  let info = response.data.info;
  dispatch({
    type: GET_EPISODES,
    payload: response.data.results,
    info: info,
  });
};



export const getLocations = () => async (dispatch) => {
  let url = "https://rickandmortyapi.com/api/location/";
  let response = await axios.get(url);
  dispatch({
    type: GET_LOCATIONS,
    payload: response.data.results,
  });
};

export const getSearch = (name, pageNumber) => async (dispatch) => {
  const data = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}`
  );
  let info = data.data.info;
  dispatch({
    type: GET_SEARCH,
    payload: data.data.results,
    info: info,
  });
};

export const getGender = (gender) =>
  async (dispatch) =>{
    const data = await axios.get(`https://rickandmortyapi.com/api/character/?gender=${gender}`)
    let info = data.data.info
    console.log(data)
    dispatch({
      type: GENDER,
      payload: data.data.results,
      info : info,
    })
  }

  export const getSpecies = (species) =>
    async (dispatch) => {
      const data = await axios.get(
        `https://rickandmortyapi.com/api/character/?species=${species}`);
        let info = data.data.info;
      dispatch({
        type: SPECIES,
        payload: data.data.results,
        info: info,
      });

    }

    export const getStatus = (status) =>
      async (dispatch) => {
        const data = await axios.get(
          `https://rickandmortyapi.com/api/character/?status=${status}`);
          let info = data.data.info;
        dispatch({
          type: STATUS,
          payload: data.data.results,
          info: info,
        });
      }
