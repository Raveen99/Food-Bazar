import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { popularCuisines } from "../utils/constants";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [popularCuisines, setPopularCuisines] = useState([]);

  useEffect(() => {
    fetchPopCuisine();
  }, []);

  const fetchPopCuisine = async () => {
    const data = await fetch(popularCuisines);
    console.log("Data: ", data);
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
    </div>
  );
};

export default Search;
