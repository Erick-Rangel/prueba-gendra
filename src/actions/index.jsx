import {
  GET_CHARACTERS,
  GET_EPISODES,
  GET_LOCATIONS,
  GET_SEARCH,
  GET_NEXT,
  GET_PREV,
  GET_SEARCH_EPISODES,
} from "./types";

import axios from "axios";

export const getCharacters = () => async (dispatch) => {
  let url = `https://rickandmortyapi.com/api/character/?page=42`;
  let response = await axios.get(url);
  let next = response.data.info.next;
  let prev = response.data.info.prev;
  dispatch({
    type: GET_CHARACTERS,
    payload: response.data.results,
    next: next,
    prev: prev,
  });
};

export const getEpisodes = () => async (dispatch) => {
  let url = "https://rickandmortyapi.com/api/episode/";
  let response = await axios.get(url);
  let next = response.data.info.next;
  let prev = response.data.info.prev;
  dispatch({
    type: GET_EPISODES,
    payload: response.data.results,
    next: next,
    prev: prev,
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

export const getSearch = (name) => async (dispatch) => {
  const data = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  let next = data.data.info.next;
  let prev = data.data.info.prev;
  dispatch({
    type: GET_SEARCH,
    payload: data.data.results,
    next: next,
    prev: prev,
  });
};


export const getSearchEpisodes = (id) => async (dispatch) => {
  const data = await axios.get(
    `https://rickandmortyapi.com/api/episode/${id}`
  );
  console.log(data);
  dispatch({
    type: GET_SEARCH_EPISODES,
    payload: data.data,
  
  });
};


export const getNext = (next) => async (dispatch) => {
  let url = next;
  let response = await axios.get(url);
  let json = response.data.info.next;
  let prev = response.data.info.prev;
  dispatch({
    type: GET_NEXT,
    payload: response.data.results,
    next: json,
    prev: prev,
  });
};

export const getPrev = (prev) => async (dispatch) => {
  let url = prev;
  let response = await axios.get(url);
  let json = response.data.info.prev;
  let next = response.data.info.next;
  dispatch({
    type: GET_PREV,
    payload: response.data.results,
    prev: json,
    next: next,
  });
};
