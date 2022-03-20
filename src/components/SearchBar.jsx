import React, { useState } from "react";
import { getSearch, getSearchEpisodes } from "../actions";
import { useDispatch } from "react-redux";


export const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchById, setSearchById] = useState([]);

 
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setSearchById(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchById !== []){
      dispatch(getSearchEpisodes(searchById));
    }else{
    dispatch(getSearch(search));
    } 
    setSearch("");
    
  };

 
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => handleInputChange(e)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}
      />
      <button onClick={(e) => handleSubmit(e)}>Search</button>
    </div>
  );
};
