import React from "react";
import { useGlobalContext } from "../Context/Context";

const FilterSection = () => {
  const {
    filters: { tag },
    AllRes,
    updatedFilterValue,
  } = useGlobalContext();

  const getUniqueData = (data, property) => {
    let tagValue = data.map((cur) => {
      return cur[property];
    });
    return (tagValue = ["All",...new Set(tagValue)]);
    // console.log(tagValue)
  };

  const tagData = getUniqueData(AllRes, "tag");
  return (
    <div className="FilterSection">
      <h3>Cuisines</h3>
        {tagData.map((cur, index) => {
          return (
            <div className="cuisine-item" key={index}>
              <button
                 className={`d-flex ${cur === tag ? "active" : ""}`} 
                type="button"
                name="tag"
                value={cur}
                onClick={updatedFilterValue}
              >
                {cur}
              </button>
            </div>
          );
        })}


    </div>
  );
};

export default FilterSection;
