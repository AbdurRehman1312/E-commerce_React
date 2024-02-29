import React from "react";
import { Link, NavLink } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-6 gap-5">
          <div className="w-full lg:order-none order-2">
            <img src="images/signupimg.png" alt="" className="lg:w-5/6 sm:w-full" />
          </div>
          <form className="flex flex-col gap-6 w-80 justify-center mx-auto px-3">
            <h2 className="text-black text-3xl font-semibold">Create an Account</h2>
            <h2>Enter your details below</h2>
            <div className="flex flex-col gap-8">
            <input
              className="h-8 border-b border-gray-300 py-2 text-sm placeholder:text-gray-600 focus:outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-8 border-b border-gray-300 py-2 text-sm placeholder:text-gray-600 focus:outline-none"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              className="h-8 border-b border-gray-300 py-2 text-sm placeholder:text-gray-600 focus:outline-none"
              type="password"
              placeholder="Password"
            />
            </div>
            <button className="btn_red">
              Create Account
            </button>
            <button className="btn_white flex gap-4 items-center justify-center">
              <img src="icons/googleicon.png" alt="" className="w-5" />
              Signup with Google
            </button>
            <div className="text-center text-gray-700 flex items-center justify-center gap-3">
              <h2 className=" text-sm">Already have an account ?</h2>
              <span className="text-sm font-semibold underline underline-offset-8"><Link to="/login" >Login</Link></span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
