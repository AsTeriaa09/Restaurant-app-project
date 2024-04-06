import React from "react";
import { Link } from "react-router-dom";
import { TbBrandDrupal } from "react-icons/tb";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import "../styles/Footer.css";
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <Link className="footer-logo" to="/">
          <img src={logo} alt="" />
          </Link>
          <p className="mt-3 mb-1">
            Find the best Restaurants, Deals, Discounts & Offers
          </p>
          <p className="mb-1">
            Write to us at : <span> reserve&relish@gmail.com</span>
          </p>
          <div className="socials mb-2 ">
            <Link className="social-link">
              <TiSocialFacebook />
            </Link>
            <Link className="social-link">
              <SlSocialInstagram />
            </Link>
            <Link className="social-link">
              <TiSocialTwitter />
            </Link>
          </div>
          <small>© 2024 - Reserve & Relish All Rights Reserved</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
