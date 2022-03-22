import React from "react";
import { getSearch} from "../actions";
import { useDispatch } from "react-redux";
import styles from "./Search.module.scss"

export const SearchBar = ({pageNumber, search, setPageNumber,setSearch}) => {
  const dispatch = useDispatch();
  

  const handleInputChange = (e) => {
    e.preventDefault();
    setPageNumber(1);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearch(search));
    setSearch("");
  };

  return (

    <form 
    className={`${styles.search} d-flex flex-sm-row flex-colum aling-items-center justify-content-center gap-4 mb-5`}
    onSubmit={(e)=>handleSubmit(e)}
    >
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
