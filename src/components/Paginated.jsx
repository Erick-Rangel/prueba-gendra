import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNext, getPrev } from "../actions";

export const Paginated = () => {
  const dispatch = useDispatch();

  const next = useSelector((state) => state.next);
  const prev = useSelector((state) => state.prev);

  const handleNext = (e) => {
    e.preventDefault();
    dispatch(getNext(next));
  };

  const handlePrev = (e) => {
    e.preventDefault();
    dispatch(getPrev(prev));
  };




  return (
    <div>
      {prev !== null ? (
        
      
      <a href={prev} onClick={(e) => handlePrev(e)}>
        <button>Prev</button>
      </a>
      ) : (
        <a href={prev} onClick={(e) => handlePrev(e)}>
          <button disabled>Prev</button>
        </a>
      )}
    
    {next !== null ? (
      
      <a href={next} onClick={(e) => handleNext(e)}>
        <button>Next</button>
      </a>
      ) : (
        <a href={prev} onClick={(e) => handleNext(e)}>
          <button disabled>Next</button>
        </a>
      )}
    </div>
  );
};
