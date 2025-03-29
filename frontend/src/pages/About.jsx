import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import SubscribeBox from "../components/SubscribeBox";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, tenetur consequuntur adipisci explicabo eligendi
            tempora! Iusto provident minima totam nam amet nulla ut, ab
            similique repudiandae obcaecati nihil sed vel, voluptate, impedit
            consequuntur! Qui quod porro magni culpa.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, tenetur consequuntur adipisci explicabo eligendi
            tempora! Iusto provident minima totam nam amet nulla ut, ab
            similique repudiandae obcaecati nihil sed vel, voluptate, impedit
            consequuntur! Qui quod porro magni culpa.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            suscipit obcaecati? Quaerat, modi optio veniam enim magnam dicta
            quisquam, consequuntur atque quibusdam odit rem voluptas, officia ea
            odio ut qui.
          </p>
        </div>
      </div>
      <div className="py-4 flex justify-start">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium aut, quisquam eum libero.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium aut, quisquam eum libero.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium aut, quisquam eum libero.</p>
        </div>
      </div>
      <SubscribeBox />
    </div>
  );
};

export default About;
