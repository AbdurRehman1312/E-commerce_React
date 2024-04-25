import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Card from "../ProductCard/Card";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const WishList = () => {
  const [cards, setCards] = useState([
    {
      prod_img: "images/product6.png",
      prod_name: "Gucci duffle bag",
      prod_price: "$960",
      prod_cutPrice: "$1160",
      prod_discount: "-35%",
      showHeart: false,
      showEye: false,
      showDelete: true,
    },
    {
      prod_img: "images/product7.png",
      prod_name: "RGB liquid CPU Cooler",
      prod_price: "$1960",
      showDiscountTag: false,
      showHeart: false,
      showEye: false,
      showDelete: true,
    },
    {
      prod_img: "images/product15.png",
      prod_name: "GP11 Shooter USB Gamepad",
      prod_price: "$550",
      showDiscountTag: false,
      showHeart: false,
      showEye: false,
      showDelete: true,
    },
    {
      prod_img: "images/product16.png",
      prod_name: "Quilted Satin Jacket",
      prod_price: "$750",
      showDiscountTag: false,
      showHeart: false,
      showEye: false,
      showDelete: true,
    },
  ]);
  const [addedItems, setAddedItems] = useState(4);
  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
    setAddedItems((prevCount) => prevCount - 1);
  };
  return (
    <>
      <BreadCrumb />
      <section>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="container my-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-black text-lg font-semibold mb-2 sm:mb-0">
              Wishlist ({addedItems})
            </h2>
            <button className="btn_white px-6 py-2 sm:px-9 sm:py-3">
              Move All To Bag
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
            {cards.map((card, index) => (
              <Card
                key={index}
                prod_img={card.prod_img}
                prod_name={card.prod_name}
                prod_price={card.prod_price}
                prod_cutPrice={card.prod_cutPrice}
                prod_discount={card.prod_discount}
                showDelete={true}
                showEye={card.showEye}
                showHeart={card.showHeart}
                showDiscountTag={card.showDiscountTag}
                onDelete={() => handleDeleteCard(index)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-5 sm:flex-row justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="icons/redbox.png" alt="" className="w-5" />
              <h1 className="text-lg font-semibold">Just For You</h1>
            </div>
            <button className="btn_white px-6 py-2 sm:px-9 sm:py-3">
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
            <Card
              prod_img="images/product11.png"
              prod_name="ASUS FHD Gaming Laptop"
              prod_price="$960"
              prod_cutPrice="$1160"
              prod_discount="-35%"
              showHeart={false}
              showDelete={false}
              prod_rating="images/fivestar.png"
              prod_reviews="(65)"
            />
            <Card
              prod_img="images/product3.png"
              prod_name="IPS LCD Gaming Monitor"
              prod_price="$1160"
              showDiscountTag={false}
              showHeart={false}
              showDelete={false}
              prod_rating="images/fivestar.png"
              prod_reviews="(65)"
            />
            <Card
              prod_img="images/product1.png"
              prod_name="HAVIT HV-G92 Gamepad"
              prod_price="$560"
              prod_discount="New"
              showHeart={false}
              showDelete={false}
              prod_rating="images/fivestar.png"
              prod_reviews="(65)"
            />
            <Card
              prod_img="images/product2.png"
              prod_name="AK-900 Wired Keyboard"
              prod_price="$200"
              showDiscountTag={false}
              showHeart={false}
              showDelete={false}
              prod_rating="images/fivestar.png"
              prod_reviews="(65)"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WishList;
