import { useState, useEffect } from "react";
import { resURL } from "../utils/constants";
import Banner from "./Banner";
import TopRest from "./TopRest";
import OnlineRest from "./OnlineRest";
import HomeShimmer from "../Shimmers/HomeShimmer";

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
    console.log("Restaurant Data: ", restaurantData);
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
  //console.log("List Of Restaurant: ", listOfRestaurants);
  return listOfRestaurants.length === 0 ? (
    <HomeShimmer />
  ) : (
    <div className="w-full h-full pt-4">
      <Banner data={bannerData} />
      <hr className="border-solid border-1 border-[rgb(240, 240, 245)] m-8 calc(10% + 52px)"></hr>

      <TopRest resData={topRestaurant} resTitle={topResTitle} />
      <hr className="border-solid border-1 border-[rgb(240, 240, 245)] m-8 calc(10% + 52px)"></hr>

      <OnlineRest resTitle={resTitle} resData={listOfRestaurants} />
    </div>
  );
};

export default Body;
