import React, { useState } from "react";
import { getSearch} from "../actions";
import { useDispatch } from "react-redux";
import styles from "./Search.module.scss"

export const SearchBar = ({pageNumber, search, setPageNumber,setSearch}) => {
  const dispatch = useDispatch();
  

  const handleInputChange = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(pageNumber, search));
    setSearch("");
  };

  return (

    <form 
    className={`${styles.search} d-flex flex-sm-row flex-columaling-items-center justify-content-center gap-4 mb-5`}
    onSubmit={(e)=>handleSubmit(e)}
    >
      {console.log(search)}
      <input
        type="text"
        placeholder="Search for characters"
        className={styles.input}
        value={search}
        onChange={(e)=>handleInputChange(e)}  
        />
      <button 
      className={`${styles.btn} btn btn-primary fs-5`}
      type="submit">Search</button>
    </form>

  );
};
