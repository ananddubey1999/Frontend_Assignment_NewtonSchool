import React from "react";
const PaginationButtonsList = ({ page, clickHandler }) => {
  let pages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className="pagination-buttons-list">
      {pages.map((ele, id) => {
        return (
          <button
            className={ele == page ? "active-btn" : ""}
            id={`button-${ele}`}
            key={id}
            onClick={() => {
              clickHandler(ele);
            }}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export { PaginationButtonsList };
