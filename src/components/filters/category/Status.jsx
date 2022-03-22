import { FilterButton } from "../FilterButton";

export const Status = ({ setStatus, setPageNumber, handleSearchAndFilters }) => {
  let status = ["Alive", "Dead", "Unknown"];
   
  return (
    <div className="accordion-item">
      <h2 className="accordon-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          onClick={(e)=>handleSearchAndFilters(e)}
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status?.map((item, index) => {
            return (
              <FilterButton
                key={index}
                index={index}
                name="status"
                task={setStatus}
                setPageNumber={setPageNumber}
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
