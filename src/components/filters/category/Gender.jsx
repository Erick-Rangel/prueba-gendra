import { FilterButton } from "../FilterButton";

export const Gender = ({ setGender, setPageNumber, handleSearchAndFilters }) => {
  const genders = ["female", "male", "genderless", "unknown "];

  return (
    <div className="acordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
          onClick={(e) => handleSearchAndFilters(e)}
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((item, index) => {
            return (
              <FilterButton
                key={index}
                index={index}
                setPageNumber={setPageNumber}
                task={setGender}
                input={item}
                name="genders"
                handleSearchAndFilters={handleSearchAndFilters}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
