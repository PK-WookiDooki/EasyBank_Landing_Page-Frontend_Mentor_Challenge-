// import React from "react";

const Card = ({ title, desc, icon }) => {
  return (
    <div className="mt-7 text-center lg:text-left md:w-[45%] lg:w-auto">
      <img src={icon} alt="" className="mx-auto lg:ms-0" />
      <h2 className="text-xl w-[60%] lg:w-full mx-auto lg:ms-0 mt-5">
        {title}
      </h2>
      <p className="text-gray-400 w-[80%] lg:w-full mx-auto lg:ms-0 mt-3">
        {desc}
      </p>
    </div>
  );
};

export default Card;
