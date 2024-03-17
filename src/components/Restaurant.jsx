import React, { useEffect, useRef, useState } from "react";
import "../styles/Restaurant.css";
import Slider from "react-slick";
import { Resizable } from "react-resizable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Restaurant.css";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

const Restaurant = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleResize = (event, { size }) => {
    // Handle resizing logic if needed
  };

  const [resData, setResData] = useState([]);
  const sliderRef = useRef(null);

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

        <div className="container">
          <Resizable
            width={800}
            height={400}
            onResize={handleResize}
            draggableOpts={{ enableUserSelectHack: false }}
          >
            <Slider ref={sliderRef} {...settings}>
              {resData.map((cur, index) => (
                <div key={index} className="slick-img ms-4">
                  <div className="card">
                    <img
                      src={cur.image}
                      alt={cur.name}
                      className="card-img-top"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{cur.name}</h5>
                      <p class="card-text">
                       {cur.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Resizable>
          <div className="slider-buttons">
            <div
              className="prev"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <GrLinkPrevious/>
            </div>
            <div
              className="next"
              onClick={() => sliderRef.current.slickNext()}
            >
              <GrLinkNext/>
            </div>
          </div>
        </div>
        {/* {resData.map((cur) => {
        return (
          <div>
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
