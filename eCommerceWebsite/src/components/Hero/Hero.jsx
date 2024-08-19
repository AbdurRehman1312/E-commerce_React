import { Link } from "react-router-dom"
const Hero = () => {
    return (
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
    )
}

export default Hero