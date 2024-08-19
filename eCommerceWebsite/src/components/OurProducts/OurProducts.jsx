import React from "react";
import Card from "../ProductCard/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cardProp from "./data";
const OurProducts = () => {
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
