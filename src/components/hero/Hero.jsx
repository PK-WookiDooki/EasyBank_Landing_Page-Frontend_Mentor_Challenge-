// import React from "react";
import { Mockups, MBg } from "../../assets";
import { GButton } from "..";
import "./hero.css";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="home">
      <section id="home" className="w-full mx-auto lg:ps-24">
        <div className="flex flex-col lg:flex-row-reverse items-center hero_section min-h-screen overflow-hidden">
          <div className="w-full relative">
            <img
              src={Mockups}
              className="absolute -translate-y-28 phones_img md:mx-auto lg:translate-x-40 lg:-translate-y-[520px]"
              alt=""
            />
            <img
              src={MBg}
              alt=""
              className="w-full ms-auto lg:hidden block top-0"
            />
          </div>
          {/* <div className="hidden lg:block "></div> */}
          <div className="w-full lg:w-[70%] text-center lg:text-left tracking-wide">
            <h2 className="text-5xl lg:w-[80%]">
              {" "}
              Next generation digital banking
            </h2>
            <p className="px-5 lg:px-0 lg:w-[80%] mt-4 mb-7 text-gray-400">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <GButton />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
