import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPaginated } from "../actions";
import styles from "./Pagination.module.scss"

export const Paginated = ({pageNumber, setPageNumber}) => {
  const dispatch = useDispatch();

let pageChange = (page) => {
  setPageNumber(page.selected + 1);
  dispatch(getPaginated(page.selected + 1));
};

useEffect(() => {
  dispatch(getPaginated(pageNumber));
}, [dispatch, pageNumber]);

const info = useSelector((state) => state.info);

const [width, setWidth] = useState(window.innerWidth);
const updateDimensions = () => {
  setWidth(window.innerWidth);
};
useEffect(() => {
  window.addEventListener("resize", updateDimensions);
  return () => window.removeEventListener("resize", updateDimensions);
}, []);


  return (
    <div>
      <ReactPaginate
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        className={`${styles.pagination} justify-content-center my-4 gap-4`}
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName={` ${styles.prev} btn btn-primay fs-5 `}
        nextClassName={`${styles.next} btn btn-primary fs-5 `}
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </div>
  );
};
