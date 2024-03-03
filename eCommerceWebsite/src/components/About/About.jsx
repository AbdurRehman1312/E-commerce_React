import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Warehouse,
  CircleDollarSign,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";
import TeamCard from "../TeamCard/TeamCard";
import Services from "../Services/Services";

const About = () => {
  return (
    <>
      <BreadCrumb />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="flex flex-col justify-center gap-6 w-full lg:w-4/5">
              <h1 className="text-black font-bold">Our Story</h1>
              <h2 className="text-black text-sm text-justify">
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data, and
                service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3 million customers across the region.
              </h2>
              <h2 className="text-black text-sm text-justify">
                Exclusive has more than 1 million products to offer, growing at
                a very fast pace. Exclusive offers a diverse assortment in
                categories ranging from consumer electronics to household goods.
              </h2>
            </div>
            <div className="w-full flex justify-end">
              <img
                src="images/aboutimg.png"
                alt=""
                className="w-[100%] lg:w-[80%] object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 my-14 w-full">
            <CategoryCard
              category_name="10.5k"
              icon={Warehouse}
              about_desc="Sallers active our site"
              fontSize="text-4xl"
              padding="py-24"
            />
            <CategoryCard
              category_name="33k"
              icon={CircleDollarSign}
              about_desc="Monthly Produduct Sale"
              fontSize="text-4xl"
              padding="py-24"
            />
            <CategoryCard
              category_name="45.5k"
              icon={ShieldCheck}
              about_desc="Customer active in our site"
              fontSize="text-4xl"
              padding="py-24"
            />
            <CategoryCard
              category_name="25k"
              icon={BadgeDollarSign}
              about_desc="Annual gross sale in our site"
              fontSize="text-4xl"
              padding="py-24"
            />
          </div>
          <Swiper
            style={{
              "--swiper-pagination-color": "#db4444",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "3px",
              "marginBottom": "40px"
            }}
            slidesPerView={3}
            spaceBetween={90}
            loop ={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <TeamCard
                team_img="images/team1.png"
                team_name="Tom Cruise"
                team_designation="Founder & Chairman"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                team_img="images/team2.png"
                team_name="Emma Watson"
                team_designation="Managing Director"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                team_img="images/team3.png"
                team_name="Will Smith"
                team_designation="Product Designer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                team_img="images/team1.png"
                team_name="Tom Cruise"
                team_designation="Founder & Chairman"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                team_img="images/team2.png"
                team_name="Emma Watson"
                team_designation="Managing Director"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard
                team_img="images/team3.png"
                team_name="Will Smith"
                team_designation="Product Designer"
              />
            </SwiperSlide>
          </Swiper>
          <Services />
        </div>
      </section>
    </>
  );
};

export default About;
