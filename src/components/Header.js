import LOGO from "../img/logo.jpeg";
import {
  LuSearch,
  LuBadgePercent,
  LuUser,
  LuShoppingCart,
} from "react-icons/lu";
import { TbPokeball } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import { useState } from "react";
import Overlay from "./Overlay";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const cartData = Object.values(cartItems);
  const itemCount = cartData.reduce((acc, item) => {
    return (acc += item.count);
  }, 0);

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div>
      <div className="flex sticky top-0 left-0 right-0 z-30 px-12 shadow-xl h-20 bg-[#fff] overflow-hidden">
        <div className="flex relative items-center max-w-fit min-w-[1200px] mx-auto">
          <Link to="/">
            <div className="flex items-center">
              <img src={LOGO} alt="logo" className="w-16 h-16"></img>
              <p className="text-2xl font-medium ml-4 mr-40 text-[#fc8019]">
                Food Bazar
              </p>
            </div>
          </Link>

          <div className="m-auto">
            <ul className="flex flex-row-reverse m-0 p-0">
              <li className="flex mr-20 text-base font-medium items-center cursor-pointer hover:text-orange-400">
                <Link to="/cart">
                  <span className="m-2 text-xl">
                    <LuShoppingCart style={{ display: "inline" }} />
                  </span>
                  Cart ({itemCount})
                </Link>
              </li>
              <li className="flex mr-20 text-base font-medium items-center cursor-pointer hover:text-orange-400">
                <div onClick={toggleLogin}>
                  <span className="m-2 text-xl">
                    <LuUser style={{ display: "inline" }} />
                  </span>
                  Sign In
                </div>
              </li>
              <li className="flex mr-20 text-base font-medium items-center cursor-pointer hover:text-orange-400">
                <Link to="/help">
                  <span className="m-2 text-xl">
                    <TbPokeball style={{ display: "inline" }} />
                  </span>
                  Help
                </Link>
              </li>
              <li className="flex mr-20 text-base font-medium items-center cursor-pointer hover:text-orange-400">
                <Link to="/offers">
                  <span className="m-2 text-xl">
                    <LuBadgePercent style={{ display: "inline" }} />
                  </span>
                  Offers
                </Link>
              </li>
              <li className="flex mr-20 text-base font-medium items-center cursor-pointer hover:text-orange-400">
                <Link to="/search">
                  <span className="m-2 text-xl">
                    <LuSearch style={{ display: "inline" }} />
                  </span>
                  Search
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
