import React, { useEffect, useState } from "react";
import { getCharacters, getGender,getSpecies, getStatus } from "../actions";
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
  dispatch(getCharacters())
  }, [dispatch]);
  
  const paginated = useSelector((state) => state.paginated);
const info = useSelector((state) => state.info);


const handleSearchAndFilters = ()=>{
  dispatch(getStatus(status))
  dispatch(getGender(gender))
  dispatch(getSpecies(species))
}

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
            <div className="row">
              <Filter
              handleSearchAndFilters={handleSearchAndFilters}
              pageNumber={pageNumber}
              status={status}
              setStatus={setStatus}
              setGender={setGender}
              setSpecies={setSpecies}
              setPageNumber={setPageNumber}
              />

              <Card
                paginated={paginated}
                key={paginated.id}
              />
              <Paginated
              info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
