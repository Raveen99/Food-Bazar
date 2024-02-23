import { useState, useEffect } from "react";
import { resMenuUrl } from "../utils/constants";

const useResMenu = (resId) => {
  const [resMenuHeaderData, setResMenuHeaderData] = useState(null);
  const [resOfferData, setResOfferData] = useState([]);
  const [isPureVeg, setIsPureVeg] = useState("");
  const [topPicks, setTopPicks] = useState([]);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response = await fetch(resMenuUrl + resId);
    const json = await response.json();
    console.log("Json: ", json);
    setResMenuHeaderData(json.data);

    // Restaurant Offers Data
    setResOfferData(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    //Pure Veg Filter Data
    setIsPureVeg(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card
        ?.card?.isPureVeg ?? false
    );

    // Top Picks of Restaurant
    setTopPicks(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.carousel ?? []
    );

    // Restaurant Menu Data
    const menuLength =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length -
      2;
    console.log("Menu Length: ", menuLength);
    setResMenu(
      topPicks.length > 0
        ? json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
            2,
            menuLength
          )
        : json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
            1,
            menuLength
          )
    );
  };
  return {
    resMenuHeaderData,
    resOfferData,
    isPureVeg,
    topPicks,
    resMenu,
  };
};
export default useResMenu;
