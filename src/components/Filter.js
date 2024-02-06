import data from "../utils/mockData";
import { useState } from "react";

const Filter = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(data);
  return (
    <div className="filter-container">
      <button
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
    </div>
  );
};

export default Filter;
