import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "swiper/css";
import { Link } from "react-router-dom";
import Card from "../ProductCard/Card";

const Home = () => {
  return (
    <>
      <section>
        <div className="my-5">
          <div className="flex flex-col md:flex-row w-full text-center py-8 md:py-12 px-4 md:px-24 bg-black text-white items-center justify-between">
            <div className="flex flex-col lg:flex-col md:flex-col items-center md:items-start gap-4 md:gap-7">
              <div className="flex items-center text-white gap-2">
                <img src="images/halfapple.png" alt="" className="w-12" />
                <h1 className="text-sm font-light">iPhone 14 Series</h1>
              </div>
              <h1 className="text-2xl md:text-6xl text-center md:text-start text-white font-semibold">
                Up to 10% off Voucher
              </h1>
              <Link
                to="/"
                className="text-white text-sm flex items-center gap-2 md:gap-3 underline underline-offset-8"
              >
                Shop Now
                <span>
                  <img src="icons/rightarrow.png" alt="" className="w-3" />
                </span>
              </Link>
            </div>
            <div className="mt-4 md:mt-0">
              <img src="images/iphone.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="container my-16">
          <div className="flex items-center gap-3">
            <img src="icons/redbox.png" alt="" className="w-5" />
            <h1 className="text-sm font-bold text-red-500">Today's</h1>
          </div>
          <h1 className="text-black font-sembold text-4xl mt-6">Flash Sales</h1>
          <div className="flex justify-evenly items-center mt-7"></div>
          <Carousel className="w-full relative">
            <CarouselContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <CarouselItem>
                <Card
                  prod_img="images/product1.png"
                  prod_name="HAVIT HV-G92 Gamepad"
                  prod_discount="-40%"
                  prod_price="$120"
                  prod_cutPrice="$160"
                  prod_reviews="(88)"
                  prod_rating="images/fivestar.png"
                />
              </CarouselItem>
              <CarouselItem>
                <Card
                  prod_img="images/product2.png"
                  prod_name="AK-900 Wired Keyboard"
                  prod_discount="-35%"
                  prod_price="$960"
                  prod_cutPrice="$1160"
                  prod_reviews="(75)"
                  prod_rating="images/fourstar.png"
                />
              </CarouselItem>
              <CarouselItem>
                <Card
                  prod_img="images/product3.png"
                  prod_name="IPS LCD Gaming Monitor"
                  prod_discount="-30%"
                  prod_price="$370"
                  prod_cutPrice="$400"
                  prod_reviews="(99)"
                  prod_rating="images/fivestar.png"
                />
              </CarouselItem>
              <CarouselItem>
                <Card
                  prod_img="images/product4.png"
                  prod_name="S-Series Comfort Chair"
                  prod_discount="-25%"
                  prod_price="$375"
                  prod_cutPrice="$400"
                  prod_reviews="(99)"
                  prod_rating="images/fourhalfstar.png"
                  className = "w-full"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute lg:top-[-12%] lg:left-[94%] md:left-[90%] md:top-[-7%] lg:visible md:visible invisible" />
            <CarouselNext className="absolute lg:top-[-12%] lg:left-[97.5%] md:left-[96%] md:top-[-7%] lg:visible md:visible invisible" />
            {/* <CarouselNext />
            <CarouselPrevious /> */}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Home;
