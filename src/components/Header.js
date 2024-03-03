import LOGO from "../img/logo.png";
import {
  LuSearch,
  LuBadgePercent,
  LuUser,
  LuShoppingCart,
} from "react-icons/lu";
import { TbPokeball } from "react-icons/tb";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex sticky top-0 left-0 right-0 z-50 px-12 shadow-xl h-20 bg-[#fff] overflow-hidden">
      <div className="flex relative items-center max-w-fit min-w-[1200px] mx-auto">
        <div className="flex items-center">
          <img src={LOGO} alt="logo" className="w-16 h-16"></img>
          <p className="text-2xl font-medium ml-4 mr-40 text-[#fc8019]">
            Food Bazar
          </p>
        </div>

        <div className="m-auto">
          <ul className="flex flex-row-reverse m-0 p-0">
            <li className="flex mr-20 text-base font-medium items-center cursor-pointer">
              <span className="m-2 text-xl">
                <LuShoppingCart />
              </span>
              Cart
            </li>
            <li className="flex mr-20 text-base font-medium items-center cursor-pointer">
              <span className="m-2 text-xl">
                <LuUser />
              </span>
              Sign In
            </li>
            <li className="flex mr-20 text-base font-medium items-center cursor-pointer">
              <span className="m-2 text-xl">
                <TbPokeball />
              </span>
              Help
            </li>
            <li className="flex mr-20 text-base font-medium items-center cursor-pointer">
              <span className="m-2 text-xl">
                <LuBadgePercent />
              </span>
              Offers
            </li>
            <li className="flex mr-20 text-base font-medium items-center cursor-pointer">
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
  );
};

export default Header;
