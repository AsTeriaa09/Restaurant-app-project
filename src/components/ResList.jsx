import React from "react";
import { Link } from "react-router-dom";

const ResList = ({ filteredItems }) => {
  return (
    <div className="ResList ms-5">
      <div className="row">
        {filteredItems.map((cur) => {
          const { image, location, name, _id } = cur;
          return (
            <div className="col-lg-4" key={_id}>
              <Link to={`/singleProduct/${_id}`} className="ResList-link">
                <div className=" ms-4">
                  <div className="card ms-lg-0 ms-2 mb-4">
                    <img
                      src={image}
                      alt={name}
                      className="resList-img card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{location}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResList;
