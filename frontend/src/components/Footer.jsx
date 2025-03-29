import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 font-serif">
      <div className="flex flex-col pt-6 items-center gap-12">
        <div className="flex flex-col items-center text-center md:items-start md:text-start gap-10 md:flex-row md:justify-evenly w-full px-6">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Link to="/">
              <img src={assets.logo} className="w-32" />
            </Link>
            <div className="max-w-96">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                excepturi esse repellendus totam. Voluptatem ratione sunt
                assumenda odit quo doloribus officiis tempora omnis neque
                impedit, iste, blanditiis, maiores labore veniam!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">COMPANY</h1>
            <div>
              <Link to='/'><p>Home</p></Link>
              <Link to='about'><p>About us</p></Link>
              <p>Delivery</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Get In Touch</h1>
            <div>
              <p>+1-212-456-7890</p>
              <p>contact@foreveryou.com</p>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <p className="text-sm sm:text-base">Copyright 2024@foreveryou.com - All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
