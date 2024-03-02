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
    <div className="header">
      <div className="nav">
        <div className="logo-container">
          <img src={LOGO} alt="logo" className="logo"></img>
          <p className="name">Food Bazar</p>
        </div>

        <div className="items-container">
          <ul>
            <li className="item">
              <span className="icons">
                <LuShoppingCart />
              </span>
              Cart
            </li>
            <li className="item">
              <span className="icons">
                <LuUser />
              </span>
              Sign In
            </li>
            <li className="item">
              <span className="icons">
                <TbPokeball />
              </span>
              Help
            </li>
            <li className="item">
              <span className="icons">
                <LuBadgePercent />
              </span>
              Offers
            </li>
            <li className="item">
              <Link
                to="/search"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="icons">
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
