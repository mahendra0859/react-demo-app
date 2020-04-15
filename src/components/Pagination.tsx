import React from "react";

interface PaginationProps {
  pageNumber: number;
  usersPerPage: number;
  totalUsers: number;
  paginate: (number: number) => void;
}
const Pagination = ({
  pageNumber,
  usersPerPage,
  totalUsers,
  paginate,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number: number) => (
          <li
            key={number}
            className={number === pageNumber ? "page-item active" : "page-item"}
          >
            <a href="!#" onClick={() => paginate(number)} className="page-link">
              <b>{number}</b>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
