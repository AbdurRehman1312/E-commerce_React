import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const Error = () => {
  return (
    <>
      <div className="flex justify-center items-center my-12 sm:my-24 md:my-32 lg:my-36">
        <div className="flex flex-col gap-10 justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl">
            404 NOT FOUND
          </h1>
          <h2 className="lg:text-lg text-sm">Your visited page not found. You may go home page.</h2>
          <Link to="/" className="btn_red px-6 sm:px-8 md:px-10">
            Go to HomePage
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
