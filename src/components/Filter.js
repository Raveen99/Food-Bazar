import { useState } from "react";

const Filter = ({ data }) => {
  const [listOfRestaurants, setListOfRestaurant] = useState(data);
  return (
    <div className="h-11 w-full gap-3 flex mb-3">
      <div>
        <button
          className="mr-3 cursor-pointer border border-solid rounded-3xl text-sm border-gray-200 px-3 py-2 shadow-md"
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

        <button className="mr-3 cursor-pointer border border-solid rounded-3xl text-sm border-gray-200 px-3 py-2 shadow-md">
          Fast Delivery
        </button>
        <button className="mr-3 cursor-pointer border border-solid rounded-3xl text-sm border-gray-200 px-3 py-2 shadow-md">
          Pure Veg
        </button>
        <button className="mr-3 cursor-pointer border border-solid rounded-3xl text-sm border-gray-200 px-3 py-2 shadow-md">
          Offers
        </button>
      </div>
    </div>
  );
};

export default Filter;
