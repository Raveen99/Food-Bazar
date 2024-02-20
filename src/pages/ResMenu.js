import ResMenuHeader from "../components/ResMenuHeader";
import useResMenu from "../hooks/useResMenu";
import { useParams } from "react-router-dom";
import ResOffer from "../components/ResOffer";
import PureVegButton from "../components/PureVegButton";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const { resMenuHeaderData, resOfferData, isPureVeg } = useResMenu(resId);
  const [showOnlyVeg, setShowOnlyVeg] = useState(false);

  const handleVegFilter = () => {
    setShowOnlyVeg(!showOnlyVeg);
    showOnlyVeg === true
      ? (document
          .querySelector(".toggle-switch-thumb")
          .classList.add("toggle-switch-on"),
        document
          .querySelector(".toggle-switch")
          .classList.add("toggle-switch-color"))
      : (document
          .querySelector(".toggle-switch-thumb")
          .classList.remove("toggle-switch-on"),
        document
          .querySelector(".toggle-switch")
          .classList.remove("toggle-switch-color"));
  };

  console.log("ShowOnly Veg: ", showOnlyVeg);
  return (
    <div className="resmenu-container">
      <ResMenuHeader data={resMenuHeaderData} />
      <div className="resoffer-container">
        <div className="res-offers">
          <div className="offers-slider">
            {resOfferData.map((resOffer) => (
              <ResOffer key={resOffer?.info?.offerIds[0]} data={resOffer} />
            ))}
          </div>
        </div>
      </div>
      <div className="veg-only-filter">
        <PureVegButton isPureVeg={isPureVeg} onFilterToggle={handleVegFilter} />
      </div>
      <hr
        style={{
          borderBottom: "1px solid #d3d3d3",
          margin: "18px 0 0 18px",
        }}
      ></hr>
    </div>
  );
};
export default ResMenu;
