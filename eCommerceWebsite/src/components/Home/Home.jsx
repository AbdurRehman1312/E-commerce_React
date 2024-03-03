import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Card from "../ProductCard/Card";
import CategoryCard from "../CategoryCard/CategoryCard";
import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad,
} from "lucide-react";
import OurProducts from "../OurProducts/OurProducts";
import Services from "../Services/Services";
const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date("2024-03-25") - new Date();
      const oneDay = 1000 * 60 * 60 * 24;
      const oneHour = 1000 * 60 * 60;
      const oneMinute = 1000 * 60;
      const oneSecond = 1000;

      const daysLeft = Math.floor(difference / oneDay);
      const hoursLeft = Math.floor((difference % oneDay) / oneHour);
      const minutesLeft = Math.floor((difference % oneHour) / oneMinute);
      const secondsLeft = Math.floor((difference % oneMinute) / oneSecond);

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    };
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  let cardProp = [
    {
      prod_img: "images/product1.png",
      prod_name: "HAVIT HV-G92 Gamepad",
      prod_discount: "-40%",
      prod_price: "$120",
      prod_cutPrice: "$160",
      prod_reviews: "(88)",
      prod_rating: "images/fivestar.png",
    },
    {
      prod_img: "images/product2.png",
      prod_name: "AK-900 Wired Keyboard",
      prod_discount: "-35%",
      prod_price: "$960",
      prod_cutPrice: "$1160",
      prod_reviews: "(75)",
      prod_rating: "images/fourstar.png",
    },
    {
      prod_img: "images/product3.png",
      prod_name: "IPS LCD Gaming Monitor",
      prod_discount: "-30%",
      prod_price: "$370",
      prod_cutPrice: "$400",
      prod_reviews: "(99)",
      prod_rating: "images/fivestar.png",
    },
    {
      prod_img: "images/product4.png",
      prod_name: "S-Series Comfort Chair",
      prod_discount: "-25%",
      prod_price: "$375",
      prod_cutPrice: "$400",
      prod_reviews: "(99)",
      prod_rating: "images/fourhalfstar.png",
      className: "w-full",
    },
    {
      prod_img: "images/product3.png",
      prod_name: "IPS LCD Gaming Monitor",
      prod_discount: "-30%",
      prod_price: "$370",
      prod_cutPrice: "$400",
      prod_reviews: "(99)",
      prod_rating: "images/fivestar.png",
    },
    {
      prod_img: "images/product1.png",
      prod_name: "HAVIT HV-G92 Gamepad",
      prod_discount: "-40%",
      prod_price: "$120",
      prod_cutPrice: "$160",
      prod_reviews: "(88)",
      prod_rating: "images/fivestar.png",
    },
  ];

  let categories = [
    { category_name: "Phone", icon: Smartphone },
    { category_name: "Computers", icon: Monitor },
    { category_name: "Watches", icon: Watch },
    { category_name: "Camera", icon: Camera },
    { category_name: "Headphones", icon: Headphones },
    { category_name: "Gaming", icon: Gamepad },
    { category_name: "Technology", icon: Smartphone },
  ];

  return (
    <>
      <section>
        <div className="mb-5">
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
        <div className="container my-10 border-b">
          <div className="flex items-center gap-3">
            <img src="icons/redbox.png" alt="" className="w-5" />
            <h1 className="text-sm font-bold text-red-500">Today's</h1>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-col gap-16 items-center">
            <h1 className="text-black font-sembold text-3xl my-6">
              Flash Sales
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex flex-col justify-center items-center gap-1 font-bold text-black w-16 sm:w-20 py-1 sm:py-2 rounded shadow-md">
                <h2 className="text-xs sm:text-sm">Days</h2>
                <h2 className="text-base sm:text-3xl">{days}</h2>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 font-bold text-black w-16 sm:w-20 py-1 sm:py-2 rounded shadow-md">
                <h2 className="text-xs sm:text-sm">Hours</h2>
                <h2 className="text-base sm:text-3xl">{hours}</h2>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 font-bold text-black w-16 sm:w-20 py-1 sm:py-2 rounded shadow-md">
                <h2 className="text-xs sm:text-sm">Minutes</h2>
                <h2 className="text-base sm:text-3xl">{minutes}</h2>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 font-bold text-black w-16 sm:w-20 py-1 sm:py-2 rounded shadow-md">
                <h2 className="text-xs sm:text-sm">Seconds</h2>
                <h2 className="text-base sm:text-3xl">{seconds}</h2>
              </div>
            </div>
          </div>
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
        <div className="container my-10 border-b">
          <div className="flex items-center gap-3">
            <img src="icons/redbox.png" alt="" className="w-5" />
            <h1 className="text-sm font-bold text-red-500">Categories</h1>
          </div>
          <h1 className="text-black font-sembold text-3xl my-6">
            Browse By Category
          </h1>
          <Carousel className="w-full relative py-16 mb-11">
            <CarouselContent>
              {categories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                  <CategoryCard
                    category_name={category.category_name}
                    icon={category.icon}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute lg:top-[-12%] lg:left-[94%] md:left-[90%] md:top-[-17%] lg:visible md:visible invisible" />
            <CarouselNext className="absolute lg:top-[-12%] lg:left-[97.5%] md:left-[96%] md:top-[-17%] lg:visible md:visible invisible" />
          </Carousel>
        </div>
        <div className="container my-16 border-b">
          <div className="flex items-center gap-3">
            <img src="icons/redbox.png" alt="" className="w-5" />
            <h1 className="text-sm font-bold text-red-500">This Month</h1>
          </div>
          <div className="flex lg:flex-row flex-col md:flex-row justify-between sm:flex-col items-center">
            <h1 className="text-black font-sembold text-3xl my-6">
              Best Selling Products
            </h1>
            <button className="btn_red text-sm px-10">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
            <Card
              prod_img="images/product5.png"
              prod_name="The north coat"
              prod_price="$260"
              prod_cutPrice="$360"
              prod_rating="images/fivestar.png"
              prod_reviews="(65)"
              showDiscountTag={false}
            />
            <Card
              prod_img="images/product6.png"
              prod_name="Gucci duffle bag"
              prod_price="$960"
              prod_cutPrice="$1160"
              prod_rating="images/fourhalfstar.png"
              prod_reviews="(65)"
              showDiscountTag={false}
            />
            <Card
              prod_img="images/product7.png"
              prod_name="RGB liquid CPU Cooler"
              prod_price="$160"
              prod_cutPrice="$170"
              prod_rating="images/fourhalfstar.png"
              prod_reviews="(65)"
              showDiscountTag={false}
            />
            <Card
              prod_img="images/product8.png"
              prod_name="Small BookSelf"
              prod_price="$360"
              prod_rating="images/fivestar.png"
              prod_reviews="(65)"
              showDiscountTag={false}
            />
          </div>
        </div>
        <div className=" my-8">
          <div className="flex flex-col md:flex-row w-full text-center py-8 md:py-12 px-4 md:px-24 bg-black text-white items-center justify-between">
            <div className="flex flex-col lg:flex-col md:flex-col items-center md:items-start gap-4 md:gap-12">
              <div className="">
                <h1 className="text-sm font-bold text-[#00ff66]">Categories</h1>
              </div>
              <h1 className="text-2xl md:text-5xl text-center md:text-start text-white font-semibold w-[100%]">
                Enhance Your Music Experience
              </h1>
              <div className="flex gap-4 items-center">
                <div className="flex flex-col justify-center items-center gap-2 h-16 md:h-20 w-16 md:w-20 rounded-full bg-white">
                  <h2 className="text-xs md:text-sm font-bold text-black">
                    {days}
                  </h2>
                  <h2 className="text-xs md:text-sm font-bold text-black">
                    Days
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 h-16 md:h-20 w-16 md:w-20 rounded-full bg-white">
                  <h2 className="text-xs md:text-sm font-bold text-black">
                    {hours}
                  </h2>
                  <h2 className="text-xs md:text-sm font-bold text-black">
                    Hours
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 h-16 md:h-20 w-16 md:w-20 rounded-full bg-white">
                  <h2 className="text-xs md:text-sm font-bold text-black">
                    {minutes}
                  </h2>
                  <h2 className="text-xs md:text-sm font-bold text-black">
                    Minutes
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 h-16 md:h-20 w-16 md:w-20 rounded-full bg-white">
                  <h2 className="text-xs md:text-sm font-bold text-black">
                    {seconds}
                  </h2>
                  <h2 className="text-xs md:text-sm font-bold text-black">
                    Seconds
                  </h2>
                </div>
              </div>
              <button className="bg-[#00ff66] text-white text-sm px-10 py-4 rounded">
                Buy Now
              </button>
            </div>
            <div className="mt-4 md:mt-0 flex justify-end">
              <img
                src="images/speaker.png"
                alt=""
                className="lg:w-[60%] sm:w-full filter drop-shadow-[0px_1px_150px_#ffffff]"
              />
            </div>
          </div>
        </div>
        <OurProducts />
        <div className="container my-5">
          <div className="flex items-center gap-3">
            <img src="icons/redbox.png" alt="" className="w-5" />
            <h1 className="text-sm font-bold text-red-500">Featured</h1>
          </div>
          <h1 className="text-black font-sembold text-3xl my-6">New Arrival</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black flex justify-center pt-3 relative">
              <img src="images/arrival1.png" alt="" className="object-cover" />
              <div className="absolute bottom-5 left-5 flex flex-col gap-5 w-full md:w-1/2">
                <h2 className="text-white text-2xl md:text-3xl font-semibold">
                  PlayStation 5
                </h2>
                <p className="text-white text-sm md:text-base">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Link
                  to="/"
                  className="text-white text-sm md:text-base flex items-center gap-2 md:gap-3 underline underline-offset-8"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-6">
              <div className="bg-[#0c0c0c] flex flex-col lg:flex-row justify-between p-5 md:p-6 ">
                <div className="flex flex-col gap-5">
                  <h2 className="text-white text-2xl md:text-3xl font-semibold">
                    Women’s Collections
                  </h2>
                  <p className="text-white text-sm md:text-base">
                    Featured woman collections that give you another vibe.
                  </p>
                  <Link
                    to="/"
                    className="text-white text-sm md:text-base flex items-center gap-2 md:gap-3 underline underline-offset-8"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="flex justify-end">
                  <img
                    src="images/arrival2.png"
                    alt=""
                    className="w-full md:w-auto object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-black p-3 flex justify-center relative">
                  <img
                    src="images/arrival3.png"
                    alt=""
                    className="filter drop-shadow-[0px_1px_150px_#ffffff] w-full md:w-2/3 object-cover"
                  />
                  <div className="absolute bottom-5 left-5 flex flex-col gap-3">
                    <h2 className="text-white text-2xl md:text-3xl font-semibold">
                      Speakers
                    </h2>
                    <p className="text-white text-sm md:text-base">
                      Amazon wireless speakers
                    </p>
                    <Link
                      to="/"
                      className="text-white text-sm md:text-base flex items-center gap-2 md:gap-3 underline underline-offset-8"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="bg-black p-3 flex justify-center relative">
                  <img
                    src="images/arrival4.png"
                    alt=""
                    className="filter drop-shadow-[0px_1px_150px_#ffffff] w-full md:w-2/3 object-cover"
                  />
                  <div className="absolute bottom-5 left-5 flex flex-col gap-3">
                    <h2 className="text-white text-2xl md:text-3xl font-semibold">
                      Perfume
                    </h2>
                    <p className="text-white text-sm md:text-base">
                      GUCCI INTENSE OUD EDP
                    </p>
                    <Link
                      to="/"
                      className="text-white text-sm md:text-base flex items-center gap-2 md:gap-3 underline underline-offset-8"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
      </section>
    </>
  );
};

export default Home;
