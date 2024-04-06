import React from "react";
import "../styles/HeroSection.css";
import { IoSearch } from "react-icons/io5";
import { useGlobalContext } from "../Context/Context";

const HeroSection = () => {
  const {
    filters: { search },
    updatedFilterValue,
  } = useGlobalContext();

  return (
    <div className="hero-main">
      <div className="hero-img"></div>
      <div className="hero-texts">
        <h1>
          Meet your <span className="text-danger">cravings</span> anytime!
        </h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="search"
            value={search}
            onChange={updatedFilterValue}
            className="hero-input"
            placeholder="Search for restaurants , locations.."
          />
          <div className="hero-search-bar">
            <div className="hero-icon text-danger">
              <IoSearch />
            </div>
            <div className="hero-btn btn text-light">Search</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
