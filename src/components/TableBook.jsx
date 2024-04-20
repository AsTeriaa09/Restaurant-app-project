import React, { useState } from "react";
import "../styles/TableBook.css";
import FilterSection from "./FilterSection";
import ResList from "./ResList";
import { useGlobalContext } from "../Context/Context";

const TableBook = () => {
  const { item } = useGlobalContext();
  const [filteredItems, setFilteredItems] = useState(item);

  return (
    <div className="tableBook">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <FilterSection setFilteredItems={setFilteredItems} />
          </div>
          <div className="col-lg-10">
            <ResList filteredItems={filteredItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBook;
