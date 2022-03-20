import React from "react";

export const Paginated = ({ search, handleNumber }) => {
  const numbers = () => {
    let numbers = [];
    for (let i = 1; i <= search; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <div>
      <div>
        <select onChange={(e) => handleNumber(e)} name={number}>
          {numbers().map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
