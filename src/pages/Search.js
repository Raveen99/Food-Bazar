import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { popCuisines, imgCusUrl } from "../utils/constants";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [listPopularCuisines, setListPopularCuisines] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchPopCuisine();
  }, []);

  const fetchPopCuisine = async () => {
    try {
      const data = await fetch(popCuisines);
      const popCuisinesData = await data.json();

      setListPopularCuisines(
        popCuisinesData?.data?.cards[1]?.card?.card?.imageGridCards?.info
      );
      setTitle(popCuisinesData?.data?.cards[1]?.card?.card?.header?.title);
    } catch (error) {
      console.error("Error Fetching Data: ", error);
    }
  };

  return (
    <div className="search-container">
      <div className="input-container">
        <div className="input">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            ></input>
          </div>
          <div className="search-logo">
            <LuSearch />
          </div>
        </div>
      </div>

      <div className="cuisine-container">
        <div className="cuisine-title">{title}</div>
        <div className="cuisine-img-container">
          {listPopularCuisines.map((item) => (
            <div class="cuisine-img" key={item.id}>
              <img src={imgCusUrl + item.imageId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
