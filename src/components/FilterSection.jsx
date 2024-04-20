import React from "react";
import { useGlobalContext } from "../Context/Context";

const FilterSection = ({ setFilteredItems }) => {
  const { item } = useGlobalContext();
  const allTags = [...new Set(item.map((cur) => cur.tag))];

  const filterByTag = (cur) => {
    const filteredItems = cur
      ? item.filter((restaurant) => restaurant.tag === cur)
      : item;
    setFilteredItems(filteredItems);
  };

  return (
    <div className="FilterSection">
      <h3>Cuisines</h3>

      <button
        className={setFilteredItems ? "active" : "button"}
        onClick={() => filterByTag("")}
      >
        All
      </button>
      {allTags.map((cur, id) => (
        <button
          key={id}
          className={setFilteredItems ? "" : "active"}
          onClick={() => filterByTag(cur)}
        >
          {cur}
        </button>
      ))}
    </div>
  );
};

export default FilterSection;
