import React from "react";

import { IoIosArrowRoundForward, IoIosStar } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";
import MenuItem from "../MenuItem";

const SearchDishCard = ({ item }) => {
  const restaurant = item?.card?.card?.restaurant?.info;
  const info = item?.card?.card?.info;

  console.log("info: ", info);

  if (!restaurant || !info) return;
  return (
    <div className="p-2 w-3/4 sm:w-5/12 bg-white rounded-xl">
      <Link to={`/restaurants/${restaurant?.id}`} key={restaurant?.id}>
        <div className="flex justify-between items-center">
          <div className=" text-gray-600 p-2 cursor-pointer">
            <h1 className="text-base font-semibold">{`By ${restaurant?.name}`}</h1>
            <div className="flex border-b pb-2 text-gray-700 items-center gap-1 text-sm font-medium">
              <div className="flex  ">
                <IoIosStar />
                <p className="pl-[2px]">{restaurant?.avgRating}</p>
              </div>
              <span className="flex items-center justify-center">
                <LuDot />
              </span>
              <div>
                {restaurant?.sla?.minDeliveryTime}-
                {restaurant?.sla?.maxDeliveryTime} MINS
              </div>
              <span>
                <LuDot />
              </span>
              <div>{restaurant?.costForTwo / 100}</div>
            </div>
          </div>
          <div>
            <IoIosArrowRoundForward size={30} />
          </div>
        </div>
      </Link>

      <div className="my-3 ">
        <MenuItem data={info} key={info?.id} />
      </div>
    </div>
  );
};

export default SearchDishCard;
