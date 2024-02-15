import { MdStars } from "react-icons/md";
const ResCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    locality,
    aggregatedDiscountInfoV3,
    sla,
  } = resData?.info;

  let iconStyle = { color: "green", fontSize: "1.5rem" };

  return (
    <div className="res">
      <div className="res-card">
        <div className="card-1">
          <div className="res-image">
            <img
              alt="res-logo"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                cloudinaryImageId
              }
            />

            <div className="offer-container">
              <div className="offer">
                {(aggregatedDiscountInfoV3?.header ?? " ") +
                  " " +
                  (aggregatedDiscountInfoV3?.subHeader ?? " ")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="res-data">
        <p className="res-info">{name}</p>
        <p className="res-info res-rating">
          <MdStars style={iconStyle} />

          {avgRating + " . " + sla?.slaString}
        </p>
        <p className="res-category-area">{cuisines.join(", ")}</p>
        <p className="res-category-area">{locality}</p>
      </div>
    </div>
  );
};

export default ResCard;
