import React, { useEffect } from "react";
import "../styles/SinglePage.css";
import { useGlobalContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";

const SinglePage = () => {
  const { getSinglePageData, singleRes } = useGlobalContext();
  const { id } = useParams();
  const { name, location, image, description, tag } = singleRes;

  useEffect(() => {
    getSinglePageData(id);
  }, [id]);

  return (
    <>
      <div className="SinglePage">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={image} alt={name} />
            </div>
            <div className="col-lg-6 ps-5 mt-4">
              <h2> {name} </h2>
              <p className="description">
                {" "}
                {description} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Accusamus quas eligendi cum eveniet unde
                mollitia.
              </p>
              <p className="cuisine">
                Cuisine : <span>{tag}</span>{" "}
              </p>
              <p className="location">
                {" "}
                <FaLocationDot className="location-icon" /> {location}{" "}
              </p>

              <p>
                Click here to get{" "}
                <Link to="#" className="menu-link">
                  {" "}
                  <MdOutlineRestaurantMenu /> Menu{" "}
                </Link>
              </p>

              {/* <Link to="/booking">
                <button className="book-button mt-2"> Book Now </button>
              </Link> */}

              <Link to={`/booking/${id}`}>
                <button className="book-button mt-2"> Book Now </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
