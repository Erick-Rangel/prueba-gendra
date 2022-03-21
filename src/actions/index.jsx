import {
  GET_CHARACTERS,
  GET_EPISODES,
  GET_LOCATIONS,
  GET_SEARCH,
  GET_NEXT,
  GET_PREV,
  GET_SEARCH_EPISODES,
  PAGINATED,
} from "./types";

import axios from "axios";

export const getCharacters = () => async (dispatch) => {
  let url = `https://rickandmortyapi.com/api/character/?page=42`;
  let response = await axios.get(url);
  let next = response.data.info.next;
  let prev = response.data.info.prev;
  let info = response.data.info;
  dispatch({
    type: GET_CHARACTERS,
    payload: response.data.results,
    next: next,
    prev: prev,
    info: info,
  });
};

export const getPaginated = (pageNumber) => async (dispatch) => {
  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  let response = await axios.get(url);
  let next = response.data.info.next;
  let prev = response.data.info.prev;
  let info = response.data.info;
  dispatch({
    type: PAGINATED,
    payload: response.data.results,
    next: next,
    prev: prev,
    info: info,
  });
};

export const getEpisodes = () => async (dispatch) => {
  let url = "https://rickandmortyapi.com/api/episode/";
  let response = await axios.get(url);
  let next = response.data.info.next;
  let prev = response.data.info.prev;
  let info = response.data.info;
  dispatch({
    type: GET_EPISODES,
    payload: response.data.results,
    next: next,
    prev: prev,
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

export const getSearch = (name,pageNumber) => async (dispatch) => {
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



export const getNext = (next) => async (dispatch) => {
  let url = next;
  let response = await axios.get(url);
  let json = response.data.info.next;
  let prev = response.data.info.prev;
  let info = response.data.info;
  dispatch({
    type: GET_NEXT,
    payload: response.data.results,
    next: json,
    prev: prev,
    info: info,
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
