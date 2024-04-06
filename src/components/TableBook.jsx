import React from "react";
import "../styles/TableBook.css";
import FilterSection from "./FilterSection";
import ResList from "./ResList";

const TableBook = () => {
  return (
    <div className="tableBook">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            {" "}
            <FilterSection />{" "}
          </div>
          <div className="col-lg-10 ">
            {" "}
            <ResList />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBook;
