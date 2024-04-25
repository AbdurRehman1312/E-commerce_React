import React, { useRef, useState } from "react";
import { Heart, Eye, ShoppingCart, XCircle, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
const Card = ({
  prod_discount = " ",
  prod_img,
  prod_name,
  prod_price,
  prod_cutPrice = " ",
  prod_reviews,
  prod_rating,
  showDiscountTag = true,
  showDelete = false,
  showHeart = true,
  showEye = true,
  onDelete,
}) => {
  const heartRef = useRef(null);
  const [isRed, setIsRed] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const handleClick = () => {
    if (isRed) {
      heartRef.current.setAttribute("fill", "white");
      heartRef.current.setAttribute("stroke", "black");
      toast.error("Removed From Wishlist");
    } else {
      heartRef.current.setAttribute("fill", "red");
      heartRef.current.setAttribute("stroke", "none");
      toast.success("Added to Wishlist");
    }
    setIsRed(!isRed);
  };
  const handleDelete = () => {
    onDelete();
    toast.error("Removed From Wishlist");
  };
  const addedToCart = () => {
    toast.success("Item Added To Cart")
  }
  return (
    <>
      <div className="w-[100%] relative group cursor-pointer">
        <div className="bg-[#f5f5f5] w-full py-8 overflow-hidden relative">
          <img
            src={prod_img}
            alt="Product"
            className="h-[200px] w-[70%] mx-auto rounded-t-md object-contain group-hover:scale-110 transition-all ease-in-out duration-100"
          />
          <div className="absolute w-full bottom-0 invisible group-hover:visible ">
            <button className="w-full bg-black flex justify-center items-center gap-4 py-3 px-4 text-white text-sm"
            onClick={addedToCart}>
              <ShoppingCart className="w-5" />
              Add to Cart
            </button>
          </div>
        </div>
        {showDiscountTag && (
          <div className="absolute top-3 left-2">
            <span className="bg-red-500 text-white px-4 py-2 text-xs rounded">
              {prod_discount}
            </span>
          </div>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-3">
          {showHeart && (
            <button
              variant="outline"
              className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-white"
              onClick={handleClick}
            >
              <Heart ref={heartRef} className="rounded-full w-5 " />
            </button>
          )}
          {showEye && (
            <button
              className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-white"
              onClick={() => setIsPopUpOpen(true)}
            >
              <Eye className="w-5 " />
            </button>
          )}
          {showDelete && (
            <button
              className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-white"
              onClick={handleDelete}
            >
              <Trash2 className="w-5" />
            </button>
          )}
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
      {isPopUpOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="max-w-screen-lg h-screen w-full  rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-center items-center h-screen">
              <img src={prod_img} alt="Laptop" className="w-1/3 object-cover" />
            </div>
            <button
              className="absolute top-10 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setIsPopUpOpen(false)}
            >
              <XCircle className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
