import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  Heart,
  ShoppingCart,
  CircleUserRound,
  User,
  Archive,
  XCircle,
  Star,
  LogOut,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();
  const [showHeaderItems, setShowHeaderItems] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setShowHeaderItems(
      !["/signup", "/login", "/forgot"].includes(location.pathname)
    );
  }, [location.pathname]);

  let links = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
    { name: "Signup", link: "/signup" },
  ];

  const dropDownItems = [
    { name: "Manage My Account", link: "/", icon: <User className="w-5" /> },
    { name: "My Orders", link: "/", icon: <Archive className="w-5" /> },
    { name: "My Cancellations", link: "/", icon: <XCircle className="w-5" /> },
    { name: "My Reviews", link: "/", icon: <Star className="w-5" /> },
    { name: "Logout", link: "/", icon: <LogOut className="w-5 rotate-180" /> },
  ];
  return (
    <header>
      <div className="container shadow-md w-full sticky top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-6 ">
          <Link to="/" className="flex items-center">
            {/* <img src="images/Logo.png" className="mr-3 w-28 h-5" alt="Logo" /> */}
            <h2 className="text-black text-2xl font-bold">Exclusive</h2>
          </Link>
          <div
            className="absolute right-8 top-[37%] text-2xl lg:hidden md:hidden"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <Menu name="menu" color="#2A254B" />
            ) : (
              <X name="close" color="#2A254B" />
            )}
            
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
              open ? "top-10 opacity-100" : "top-[-990px]"
            } ${showHeaderItems ? "top-10 opacity-100" : "top-[-990px]"}`}
          >
            {links.map((link) => (
              <li key={link.name} className="md:ml-8 md:my-0 my-7">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 text-sm ${
                      isActive
                        ? "text-black font-bold underline underline-offset-8"
                        : "text-gray-900"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-black lg:p-0`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="relative w-1/5 hidden lg:block">
            <input
              className="h-8 w-full rounded bg-[#f5f5f5] py-2 px-4 text-sm placeholder:text-gray-600 focus:outline-none"
              type="text"
              placeholder="What are you looking for..."
            />
            <img
              src="icons/searchicon.png"
              alt=""
              className="absolute top-[25%] right-3 w-4 h-4 mx-2"
            />
          </div>

          {showHeaderItems && (
            <div className="hidden lg:flex lg:space-x-8 sm:space-x-5">
              <Link to="/wishlist">
                <Heart className="w-5" />
              </Link>
              <Link to="/cart">
                <ShoppingCart className="w-5" />
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <CircleUserRound className="w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" bg-gradient-to-r from-gray-400 to-gray-600 bg-blend-difference text-white rounded w-52 border-0">
                  <DropdownMenuSeparator />
                  <ul className="px-1 flex flex-col gap-2">
                    {dropDownItems.map((items) => (
                      <li key={items.name}>
                        <Link
                          to={items.link}
                          className="flex gap-1 items-center"
                        >
                          {items.icon}
                          <DropdownMenuItem className="cursor-pointer text-xs">
                            {items.name}
                          </DropdownMenuItem>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
