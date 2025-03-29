import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="max-w-80 mx-auto sm:max-w-xl sm:mx-auto md:max-w-3xl md:mx-auto lg:max-w-5xl lg:mx-auto xl:max-w-7xl xl:mx-auto flex flex-col sm:flex-row border border-gray-400 my-6">
      {/* hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div>
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-gray-400"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl lg:text-5xl font-serif">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-gray-400"></p>
          </div>
        </div>
      </div>
      {/* hero right side */}
      <img className="w-full sm:w-1/2" src={assets.hero_img} />
    </div>
  );
};

export default Hero;
