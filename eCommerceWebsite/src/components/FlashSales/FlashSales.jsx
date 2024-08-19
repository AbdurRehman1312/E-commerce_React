import { useState, useEffect } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "../../components/ProductCard/Card";
import cardProp from './data';
const FlashSales = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date("2024-09-30") - new Date();
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
    return (
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
    )
}

export default FlashSales