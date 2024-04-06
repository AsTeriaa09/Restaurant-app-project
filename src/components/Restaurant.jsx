import React, { useEffect, useRef, useState } from "react";
import "../styles/Restaurant.css";
import Slider from "react-slick";
import { Resizable } from "react-resizable";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Restaurant.css";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { useGlobalContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Restaurant = () => {
  // const handleResize = (event, { size }) => {};

  const { popularRes } = useGlobalContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sliderRef = useRef(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: windowWidth <= 767 ? 1 : 4,
    slidesToScroll: 1,
  };


  return (
    <>
      <div className="res-main ">
        <div className="container">
          <div className="ms-lg-0 ms-3">
            <h1>Popular Restaurants</h1>
          </div>
        </div>

        <div className="container">
          <Resizable
            width={800}
            height={400}
            onResize={handleResize}
            draggableOpts={{ enableUserSelectHack: false }}
          >
            <Slider ref={sliderRef} {...settings}>
              {popularRes.map((cur) => {
                const { image, location, name, _id } = cur;
                return (
                  <div className="slick-img ms-4" key={_id}>
                    <Link to={`/singleProduct/${_id}`} className="ResList-link">
                      <div className="card ms-lg-0 ms-2">
                        <img src={image} alt={name} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">{name}</h5>
                          <p className="card-text">{location}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </Resizable>
          <div className="slider-buttons">
            <div
              className="prev ms-lg-0 ms-2"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <GrLinkPrevious />
            </div>
            <div
              className="next me-lg-0 me-3"
              onClick={() => sliderRef.current.slickNext()}
            >
              <GrLinkNext />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
