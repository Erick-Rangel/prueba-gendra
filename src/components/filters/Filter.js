import React from "react";
import { useDispatch } from "react-redux";
import {Gender} from "./category/Gender"
import {Species} from "./category/Species"
import {Status} from "./category/Status";

export const Filter = ({pageNumber, setPageNumber, setStatus, setGender, setSpecies, handleSearchAndFilters}) =>{
    /* const dispatch = useDispatch(); */

let clear = () =>{
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
    window.location.reload(false);
}


return(
    <div className="col-lg-3 col-12 mb-5">
        <div className="text-center fw-bold fs-4 mb-2">Filters</div>
        <div style={{cursor: "pointer"}} onClick={clear} className="text-primary text-decoration-underline text-center mb-3">
            Clear Filters</div>
            <div className="accordion" id="accordionExample">
            <Status
            handleSearchAndFilters={handleSearchAndFilters}
            setPageNumber={setPageNumber}
            setStatus={setStatus}
            />
            <Species
            handleSearchAndFilters={handleSearchAndFilters}
            setPageNumber={setPageNumber}
                setSpecies={setSpecies}
            />
            <Gender
            setPageNumber={setPageNumber}
            setGender={setGender}
            />
            
        </div>
    </div>
)
}