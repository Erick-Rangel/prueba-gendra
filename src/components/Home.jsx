import React, { useState, useEffect } from "react";
import { getCharacters, getGender, getSearch } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./Card";
import { SearchBar } from "./SearchBar";
import { Paginated } from "./Paginated";
import { NavBar } from "./NavBar";
import { Filter } from "./filters/Filter";
  
export const Home = () => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("")

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getGender(gender))
  }, [dispatch, gender]);

const handleSearchAndFilters = (e)=>{
  e.preventDefault();
  dispatch(getSearch(search, pageNumber, status, gender, species))
}

  const paginated = useSelector((state) => state.paginated);
  const characters = useSelector((state) => state.characters);
  const info = useSelector((state) => state.info);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <NavBar />
          <SearchBar 
          search={search}
          pageNumber={pageNumber}
          setSearch={setSearch} setPageNumber={setPageNumber} />

          <h2 className="text-center mb-3">Characters</h2>

          <div className="col-lg-15 col-12">
              <Filter
              handleSearchAndFilters={handleSearchAndFilters}
              pageNumber={pageNumber}
              status={status}
              setStatus={setStatus}
              setGender={setGender}
              setSpecies={setSpecies}
              setPageNumber={setPageNumber}
              />
            <div className="row">

              <Card
                paginated={paginated}
                key={characters.id}
                characters={characters}
              />
              <Paginated
                pageNumber={pageNumber}
                info={info}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
