import React, { useRef, useState } from "react";
import { Heart, Eye, ShoppingCart } from "lucide-react";

const Card = ({
  prod_discount,
  prod_img,
  prod_name,
  prod_price,
  prod_cutPrice = " ",
  prod_reviews,
  prod_rating,
}) => {
  const heartRef = useRef(null);
  const [isRed, setIsRed] = useState(false);
  const handleClick = () => {
    if (isRed) {
      heartRef.current.setAttribute("fill", "white");
      heartRef.current.setAttribute("stroke", "black");
    } else {
      heartRef.current.setAttribute("fill", "red");
      heartRef.current.setAttribute("stroke", "none");
    }
    setIsRed(!isRed);
  };

  return (
    <>
      <div className="w-[100%] relative group cursor-pointer">
        <div className="bg-[#f5f5f5] w-full p-8 overflow-hidden relative">
          <img
            src={prod_img}
            alt="Laptop"
            className="h-[200px] w-full rounded-t-md object-contain group-hover:scale-110 transition-all ease-in-out duration-100"
          />
        </div>
        <div className="absolute top-3 left-2">
          <span className="bg-red-500 text-white px-4 py-2 text-xs rounded">
            {prod_discount}
          </span>
        </div>
        <div className="absolute top-2 right-2 flex flex-col gap-3">
          <button
            variant="outline"
            className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-white"
            onClick={handleClick}
          >
            <Heart ref={heartRef} className="rounded-full w-5 " />
          </button>
          <button className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-white">
            <Eye className="w-5 " />
          </button>
        </div>
        <div className="absolute w-full bottom-[27%] invisible group-hover:visible ">
          <button className="w-full bg-black flex justify-center items-center gap-4 py-3 px-4 text-white">
          <ShoppingCart className="w-6" />
            Add to Cart
          </button>
        </div>

        <div className="flex flex-col gap-3 my-3">
          <h2 className="text-sm font-semibold">{prod_name}</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-red-500 font-semibold">
              {prod_price}
            </span>
            <span className="text-sm text-gray-500 font-semibold line-through">
              {prod_cutPrice}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <img src={prod_rating} alt="" className="w-1/3" />
            <span className="text-xs text-gray-500 font-semibold">
              {prod_reviews}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
