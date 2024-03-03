import React from "react";
import Card from "../ProductCard/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const OurProducts = () => {
  let cardProp = [
    {
      prod_img: "images/product9.png",
      prod_name: "Breed Dry Dog Food",
      prod_price: "$100",
      prod_cutPrice: " ",
      prod_reviews: "(35)",
      prod_rating: "images/threestar.png",
      showDiscountTag: false,
    },
    {
      prod_img: "images/product10.png",
      prod_name: "CANON EOS DSLR Camera",
      prod_price: "$360",
      prod_cutPrice: " ",
      prod_reviews: "(95)",
      prod_rating: "images/fourstar.png",
      showDiscountTag: false,
    },
    {
      prod_img: "images/product11.png",
      prod_name: "ASUS FHD Gaming Laptop",
      prod_price: "$700",
      prod_cutPrice: " ",
      prod_reviews: "(325)",
      prod_rating: "images/fivestar.png",
      showDiscountTag: false,
    },
    {
      prod_img: "images/product12.png",
      prod_name: "Curology Product Set ",
      prod_price: "$500",
      prod_cutPrice: " ",
      prod_reviews: "(145)",
      prod_rating: "images/fourstar.png",
      className: "w-full",
      showDiscountTag: false,
    },
    {
      prod_img: "images/product13.png",
      prod_name: "Kids Electric Car",
      prod_discount: "New",
      prod_price: "$960",
      prod_reviews: "(65)",
      prod_cutPrice: " ",
      prod_rating: "images/fivestar.png",
    },
    {
      prod_img: "images/product14.png",
      prod_name: "Jr. Zoom Soccer Cleats",
      prod_price: "$1160",
      prod_cutPrice: " ",
      prod_reviews: "(35)",
      prod_rating: "images/fivestar.png",
      showDiscountTag: false,
    },
    {
      prod_img: "images/product15.png",
      prod_name: "GP11 Shooter USB Gamepad",
      prod_discount: "New",
      prod_cutPrice: " ",
      prod_price: "$660",
      prod_reviews: "(65)",
      prod_rating: "images/fourhalfstar.png",
    },
    {
      prod_img: "images/product16.png",
      prod_name: "Quilted Satin Jacket",
      prod_price: "$660",
      prod_cutPrice: " ",
      prod_reviews: "(55)",
      prod_rating: "images/fourhalfstar.png",
      showDiscountTag: false,
    }
  ];
  return (
    <div className="container my-16">
      <div className="flex items-center gap-3">
        <img src="icons/redbox.png" alt="" className="w-5" />
        <h1 className="text-sm font-bold text-red-500">Our Products</h1>
      </div>
      <h1 className="text-black font-sembold text-3xl my-6">
        Explore Our Products
      </h1>
      <Carousel className="w-full relative mt-11">
        <CarouselContent>
          {cardProp.map((card, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <Card
                prod_img={card.prod_img}
                prod_name={card.prod_name}
                prod_discount={card.prod_discount}
                prod_price={card.prod_price}
                prod_cutPrice={card.prod_cutPrice}
                prod_reviews={card.prod_reviews}
                prod_rating={card.prod_rating}
                showDiscountTag={card.showDiscountTag}
                className="w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute lg:top-[-12%] lg:left-[94%] md:left-[90%] md:top-[-7%] lg:visible md:visible invisible" />
        <CarouselNext className="absolute lg:top-[-12%] lg:left-[97.5%] md:left-[96%] md:top-[-7%] lg:visible md:visible invisible" />
      </Carousel>
      <div className="flex justify-center my-10">
        <button className="btn_red text-sm px-14">View All Products</button>
      </div>
    </div>
  );
};

export default OurProducts;
