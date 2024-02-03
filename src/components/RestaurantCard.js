const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, locality } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="res-data">
        <p className="res-name">{name}</p>
        <p className="res-info">{avgRating + " . " + deliveryTime + " min"}</p>
        <p className="res-category">{cuisines.join(", ")}</p>
        <p className="res-area">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
