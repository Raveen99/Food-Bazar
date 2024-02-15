import { useState } from "react";

const Filter = ({ data }) => {
  const [listOfRestaurants, setListOfRestaurant] = useState(data);
  return (
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
  );
};

export default Filter;
