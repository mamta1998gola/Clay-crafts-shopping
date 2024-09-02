import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-5 font-sans text-center">
      <div className="flex flex-col md:flex-row justify-between items-center flex-wrap">
        <div className="mb-4 md:mb-0">
          <p>
            ©2024 <b>Clay Crafts</b> - All rights reserved
          </p>
        </div>
        <div className="flex justify-center mb-4 md:mb-0">
          <Link to="/about-us" className="mx-2 text-white font-bold text-sm hover:underline">
            About Us
          </Link>
          <Link to="/privacy-policy" className="mx-2 text-white font-bold text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link to="/contact-us" className="mx-2 text-white font-bold text-sm hover:underline">
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/mamta.gola.543"
            target="_blank"
            rel="nofollow noreferrer"
            className="text-white"
          >
            <i className="fa fa-facebook text-2xl"></i>
          </a>
          <a
            href="mailto:mamta1998gola@gmail.com"
            target="_blank"
            rel="nofollow noreferrer"
            className="text-white"
          >
            <i className="fa fa-envelope-o text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/mamtagola_22"
            target="_blank"
            rel="nofollow noreferrer"
            className="text-white"
          >
            <i className="fa fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://wa.me/7300646940"
            target="_blank"
            rel="nofollow noreferrer"
            className="text-white"
          >
            <i className="fa fa-whatsapp text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
