import { FilterButton } from "../FilterButton";

export const Species = ({ setSpecies, setPageNumber, handleSearchAndFilters }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disase",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
          onClick={(e) => handleSearchAndFilters(e)}
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap  gap-3">
          {species.map((item, index) => {
            return (
              <FilterButton
                name="species"
                index={index}
                key={index}
                setPageNumber={setPageNumber}
                task={setSpecies}
                input={item}
                handleSearchAndFilters={handleSearchAndFilters}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
