// import React from "react";

import { Link } from "react-router-dom";

const ArticleCard = ({ title, img, author, desc }) => {
  return (
    <div className=" w-[85%] md:w-[45%] mx-auto md:mx-0 lg:w-auto bg-white rounded shadow">
      <div className="w-full lg:h-44">
        <img
          src={img}
          alt=""
          className="w-full lg:h-full object-cover rounded-t"
        />
      </div>
      <div className="p-5">
        <small className="text-gray-400"> {author} </small>
        <Link>
          <h2 className="text-xl font-medium w-[90%] my-3 lg:w-full hover:text-LGreen duration-150">
            {" "}
            {title}{" "}
          </h2>
        </Link>
        <p className="text-gray-400 "> {desc} </p>
      </div>
    </div>
  );
};

export default ArticleCard;
