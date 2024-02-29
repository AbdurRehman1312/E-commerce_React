import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 my-6 gap-5">
        <div className="w-full">
          <img src="images/signupimg.png" alt="" className="w-5/6" />
        </div>
        <form className="flex flex-col gap-6 w-80 justify-center mx-9">
          <h2 className="text-black text-3xl font-semibold">
            Log in to Exclusive
          </h2>
          <h2>Enter your details below</h2>
          <div className="flex flex-col gap-8">
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
          <div className="flex justify-between items-center">
            <button className="btn_red shrink-0 w-1/3">Login</button>
            <span className="text-sm font-semibold text-red-500">
              <Link to="/forgot">Forgot Password ?</Link>
            </span>
          </div>
          <div className="text-center text-gray-700 flex items-center justify-center gap-3">
              <h2 className=" text-sm">Don't have an account ?</h2>
              <span className="text-sm font-semibold underline underline-offset-8"><Link to="/signup" >Signup</Link></span>
            </div>
        </form>
      </div>
    </section>
  );
};

export default Login;