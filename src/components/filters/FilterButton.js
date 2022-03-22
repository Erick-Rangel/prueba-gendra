import styles from "./FilterButton.module.scss"

export const FilterButton = ({input, task, setPageNumber,index, name, handleSearchAndFilters}) =>{
    
    return(
        <div className="form-check">
            <input
            className={`${styles.x} form-check-input`} type="radio"
            name={name} id={`${name}-${index}`}/>
            <label
            onClick={(x)=>{
                task(input); setPageNumber(1);
                handleSearchAndFilters(input)
            }}
            className="btn btn-outline-primary"
            for={`${name}-${index}`}
            >{input}</label>

        </div>
    )
}