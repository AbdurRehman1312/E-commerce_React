import { Link } from "react-router-dom"
const Featured = () => {
  return (
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
              <div className="bg-[#0c0c0c] flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-5 p-3 md:p-6">
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
  )
}

export default Featured