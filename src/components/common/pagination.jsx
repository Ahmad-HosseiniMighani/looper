import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange, onPageNext, onPagePrev }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className="pagination justify-content-center">
      <li className={"paginate_button page-item previous "+(currentPage === 1 && "disabled")}>
        <span className="page-link cursor-pointer" onClick={() => onPagePrev()}><i className="fa fa-lg fa-angle-right"></i></span>
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "paginate_button page-item active" : "paginate_button page-item"}
        >
          <span
            // to=""
            className="page-link cursor-pointer"
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        </li>
      ))}
      <li className={"paginate_button page-item next "+(currentPage === pagesCount && "disabled")}>
        <span className="page-link cursor-pointer" onClick={() => onPageNext()}><i className="fa fa-lg fa-angle-left"></i></span>
      </li>
    </ul>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  pnPageNext: PropTypes.func.isRequired,
  onPagePrev: PropTypes.func.isRequired,
};

export default Pagination;
