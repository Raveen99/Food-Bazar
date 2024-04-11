import React from "react";
import LOGO from "../img/logo.jpeg";
import {
  LuSearch,
  LuBadgePercent,
  LuUser,
  LuShoppingCart,
} from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { TbPokeball } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import { useState } from "react";
import Overlay from "./Overlay";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  const cartData = Object.values(cartItems);
  const itemCount = cartData.reduce((acc, item) => {
    return (acc += item.count);
  }, 0);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="shadow-lg pt-2 bg-slate-400">
      <div className="z-30">
        <div className="flex flex-wrap items-center justify-between mx-auto xl:px-[8%] px-[2%]">
          <div className="">
            <Link to="/" className="flex items-center mb-2">
              <img src={LOGO} alt="logo" className="w-16 h-16"></img>
              <p className="text-2xl ml-4 font-medium text-[#fc8019]">
                Food Bazar
              </p>
            </Link>
          </div>

          <div
            className="xl:hidden bloc cursor-pointer hover:text-orange-500"
            onClick={handleMenu}
          >
            {open ? (
              <RxCross2 className="w-6 h-6" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </div>

          {/* Nav Links */}
          <div
            className={`${open ? "block" : "hidden"} xl:flex xl:w-auto w-full`}
          >
            {open ? <hr className="mt-2 shadow-slate-900"></hr> : ""}

            <ul className="xl:flex">
              <li className="flex mr-20 text-base font-medium justify-center cursor-pointer hover:text-orange-400">
                <Link to="/search" className={`${open ? "my-4" : ""}`}>
                  <span className="m-2 text-xl">
                    <LuSearch style={{ display: "inline" }} />
                  </span>
                  Search
                </Link>
              </li>

              {open ? (
                <hr className="border-solid border-1 border-orange-400"></hr>
              ) : (
                ""
              )}

              <li className="flex mr-20 text-base font-medium justify-center cursor-pointer hover:text-orange-400">
                <Link to="/offers" className={`${open ? "my-4" : ""}`}>
                  <span className="m-2 text-xls">
                    <LuBadgePercent style={{ display: "inline" }} />
                  </span>
                  Offers
                </Link>
              </li>

              {open ? (
                <hr className="border-solid border-1 border-orange-400"></hr>
              ) : (
                ""
              )}

              <li className="flex mr-20 text-base font-medium justify-center cursor-pointer hover:text-orange-400">
                <Link to="/help" className={`${open ? "my-4" : ""}`}>
                  <span className="m-2 text-xl">
                    <TbPokeball style={{ display: "inline" }} />
                  </span>
                  Help
                </Link>
              </li>

              {open ? (
                <hr className="border-solid border-1 border-orange-400"></hr>
              ) : (
                ""
              )}

              <li className="flex mr-20 text-base font-medium justify-center cursor-pointer hover:text-orange-400">
                <div onClick={toggleLogin} className={`${open ? "my-4" : ""}`}>
                  <span className="m-2 text-xl">
                    <LuUser style={{ display: "inline" }} />
                  </span>
                  Sign In
                </div>
              </li>

              {open ? (
                <hr className="border-solid border-1 border-orange-400"></hr>
              ) : (
                ""
              )}

              <li className="flex mr-20 text-base font-medium justify-center cursor-pointer hover:text-orange-400">
                <Link to="/cart" className={`${open ? "my-4" : ""}`}>
                  <span className="m-2 text-xl">
                    <LuShoppingCart style={{ display: "inline" }} />
                  </span>
                  Cart ({itemCount})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Login isOpen={isLoginOpen} onClose={toggleLogin} />
      <Overlay isOpen={isLoginOpen} onClose={toggleLogin} />
    </div>
  );
};

export default Header;
