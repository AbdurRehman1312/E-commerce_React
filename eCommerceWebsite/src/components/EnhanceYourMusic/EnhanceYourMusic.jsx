import { useState, useEffect } from 'react'

const EnhanceYourMusic = () => {
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
    )
}

export default EnhanceYourMusic