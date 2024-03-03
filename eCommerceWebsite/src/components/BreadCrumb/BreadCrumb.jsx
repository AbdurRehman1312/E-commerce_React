import React from "react";
import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="container flex my-10" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline-offset-8 md:ml-2"
          >
            <Home className="mr-3 h-4 w-4" />
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={index}>
              <div className="flex items-center">
                <span className="mx-2.5 text-gray-800">/</span>
                {isLast ? (
                  <span className="ml-1 text-sm font-medium capitalize text-gray-800 hover:underline md:ml-2">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="ml-1 text-sm font-medium capitalize text-gray-800 hover:underline md:ml-2"
                  >
                    {name}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
