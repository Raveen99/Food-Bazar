import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { resURL } from "../utils/constants";
import RestaurantCardShimmer from "../Shimmers/RestaurantCardShimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resURL);

    const restaurantData = await data.json();

    setListOfRestaurant(
      restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <RestaurantCardShimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
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

      <div className="res-container">
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
