import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { resURL } from "../utils/constants";
import RestaurantCardShimmer from "../Shimmers/RestaurantCardShimmer";
import Banner from "./Banner";
import TopRest from "./TopRest";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [resTitle, setResTitle] = useState("");
  const [topRestaurant, setTopRestaurant] = useState([]);
  const [topResTitle, setTopRestTitle] = useState("");
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resURL);

    const restaurantData = await data.json();

    //Banner Data
    setBannerData(
      restaurantData?.data?.cards[0]?.card?.card?.imageGridCards?.info.map(
        (bannerInfo) => ({
          id: bannerInfo.id,
          imageId: bannerInfo.imageId,
          action: bannerInfo.action,
        })
      )
    );
    console.log("Data: ", restaurantData);
    // Top Restautants
    setTopRestaurant(
      restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setTopRestTitle(restaurantData?.data?.cards[1]?.card?.card?.header?.title);

    //Online Restaurants
    setListOfRestaurant(
      restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setResTitle(restaurantData?.data?.cards[2]?.card?.card?.title);
  };

  return listOfRestaurants.length === 0 ? (
    <RestaurantCardShimmer />
  ) : (
    <div className="body-container">
      <Banner data={bannerData} />
      <hr className="horizontal-border"></hr>

      <TopRest resData={topRestaurant} resTitle={topResTitle} />
      <hr className="horizontal-border"></hr>

      <div className="res-container">
        <div className="res-heading">
          <h2>{resTitle}</h2>
        </div>
        <div className="filter-container">
          <div className="filter">
            <button
              className="button"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                console.log("Filtered List: ", filteredList);
                setListOfRestaurant(filteredList);
              }}
            >
              Ratings 4.0+
            </button>

            <button className="button">Fast Delivery</button>
            <button className="button">Pure Veg</button>
            <button className="button">Offers</button>
          </div>
        </div>
        <div className="res-cards">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
