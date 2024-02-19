import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { LuClock8 } from "react-icons/lu";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

const ResMenuHeader = (props) => {
  const { data } = props;
  const {
    name,
    cuisines,
    city,
    sla,
    areaName,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
  } = data?.cards[0]?.card?.card?.info || {};

  let iconStyle = { fontSize: "1.3rem", verticalAlign: "bottom" };
  return (
    <div className="menu-header-container">
      <div className="res-location">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <span>Home</span>
        </Link>
        <span>/</span>
        <span>{city}</span>
        <span>/</span>
        <span style={{ color: "#535665" }}>{name}</span>
      </div>
      <div className="menu-header">
        <div className="menu-header-display">
          <div className="menu-header-display-name">{name}</div>
          <div className="menu-header-display-time">{sla?.slaString}</div>
        </div>
      </div>
      <div className="menu-res">
        <div className="menu-res-data">
          <div className="restaurant-data">
            <p className="restaurant-data-name">{name}</p>
            <p className="restaurant-data-cuisines">{cuisines?.join(", ")}</p>
            <p className="restaurant-data-cuisines">
              {areaName + ", " + sla?.lastMileTravelString}
            </p>
          </div>
          <div className="res-menu-rating">
            <span className="avg-rating">
              <FaStar />
              {avgRatingString}
            </span>
            <span className="total-rating">{totalRatingsString}</span>
          </div>
        </div>
        <hr
          style={{ borderBottom: "1px dashed #d3d3d3", marginBottom: "18px" }}
        ></hr>
        <div className="delivery-details">
          <div className="delivery-time">
            <LuClock8 style={iconStyle} />
            <span>{sla?.slaString}</span>
          </div>
          <div className="amount-two">
            <HiOutlineCurrencyRupee style={iconStyle} />
            <span>{costForTwoMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResMenuHeader;
