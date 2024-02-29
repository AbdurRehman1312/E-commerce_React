import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="bg-black pt-14 pb-5">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          <div className="flex flex-col gap-8">
            <h2 className="text-white text-2xl font-bold">Exclusive</h2>
            <h2 className="text-white text-sm font-semibold">Subscribe</h2>
            <h2 className="text-white text-sm">Get 10% off your first order</h2>
            <div className="relative">
              <input
                className="h-10 w-full rounded text-white bg-transparent border-2 border-gray-600 px-3 py-2 pr-8 text-sm placeholder:text-gray-600 focus:outline-none"
                type="text"
                placeholder="Search Here..."
              />
              <button>
                <img
                  src="icons/sendinput.png"
                  alt=""
                  className="absolute right-2 top-[29%] w-4 h-4"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-white text-lg font-bold">Support</h2>
            <h2 className="text-white text-sm">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </h2>
            <h2 className="text-white text-sm">exclusive@gmail.com</h2>
            <h2 className="text-white text-sm">+88015-88888-9999</h2>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-white text-lg font-bold">Account</h2>
            <h2 className="text-white text-sm">My Account</h2>
            <h2 className="text-white text-sm">Login/Register</h2>
            <h2 className="text-white text-sm">Cart</h2>
            <h2 className="text-white text-sm">Wishlist</h2>
            <h2 className="text-white text-sm">Shop</h2>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-white text-lg font-bold">Quick Link</h2>
            <h2 className="text-white text-sm">Privacy Policy</h2>
            <h2 className="text-white text-sm">Terms Of Use</h2>
            <h2 className="text-white text-sm">FAQ</h2>
            <h2 className="text-white text-sm">Contact</h2>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-white text-lg font-bold">Download App</h2>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-xs">
                Save $3 with App New User Only
              </span>
              <div className="flex gap-4">
                <img src="images/qrcode.png" alt="" className="w-1/3" />
                <div className="flex flex-col gap-2">
                  <img src="images/googleplay.png" alt="" className="h-8" />
                  <img src="images/appstore.png" alt="" className="h-8" />
                </div>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <img src="icons/fb.png" alt="" className="w-2" />
              <img src="icons/twitter.png" alt="" className="w-4" />
              <img src="icons/insta.png" alt="" className="w-4" />
              <img src="icons/linkedin.png" alt="" className="w-4" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-3 text-center text-gray-600 mt-10 text-sm">
          <h3 className="">@Copyright Rimel 2022. All right reserved</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
