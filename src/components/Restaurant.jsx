import React, { useEffect, useState } from "react";
import "../styles/Restaurant.css";
import Slider from "react-slick";

const Restaurant = () => {


  const [resData, setResData] = useState([]);

  const getData = async () => {
    const res = await fetch("/API.json");
    const data = await res.json();
    // console.log(data);
    setResData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="res-main">
        <div className="container">
          <h1>Popular Restaurants</h1>

         
        </div>
        {/* {resData.map((cur) => {
        return (
          <div>
            {" "}
            {cur.name}
            <img
              src={cur.image}
              alt={cur.name}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
        );
      })} */}
      </div>
    </>
  );
};

export default Restaurant;
