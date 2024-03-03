import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category_name, icon: Icon }) => {
  return (
    <Link to="/">
        <div className="w-full border border-gray-400 h-36 flex justify-center items-center rounded cursor-pointer group hover:bg-[#db4444] hover:border-[#db4444]">
          <div className="flex flex-col items-center gap-3">
            <div>
              <Icon className="w-32 h-12 group-hover:text-white" />
            </div>
            <h2 className="text-sm text-black font-semibold group-hover:text-white">
              {category_name}
            </h2>
          </div>
        </div>
    </Link>
  );
};

export default CategoryCard;
