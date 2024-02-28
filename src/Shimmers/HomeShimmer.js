import BannerShimmer from "./BannerShimmer";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
const HomeShimmer = () => {
  return (
    <div>
      <BannerShimmer />
      <div className="body-container">
        <div className="shimmer-home-container shimmer-card-container">
          <RestaurantCardShimmer />
          <RestaurantCardShimmer />
          <RestaurantCardShimmer />
          <RestaurantCardShimmer />
          <RestaurantCardShimmer />
          <RestaurantCardShimmer />
          <RestaurantCardShimmer />
          <RestaurantCardShimmer />
          <RestaurantCardShimmer />
        </div>
      </div>
    </div>
  );
};
export default HomeShimmer;
