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
    <div className="block w-full h-full pt-11 pb-2">
      <div className="sticky h-12 w-[1000px] border border-solid border-slate-800 rounded-md mx-auto">
        <div className="flex items-center h-12 w-full justify-center p-4">
          <div className="w-full">
            <input
              type="text"
              className="w-full h-full text-lg border-none overflow-hidden text-ellipsis align-middle outline-none font-sans"
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            ></input>
          </div>
          <div className="text-lg">
            <LuSearch />
          </div>
        </div>
      </div>

      <div className="relative w-[1000px] my-2 mx-auto pt-7 pl-4">
        <div className="text-2xl font-bold text-slate-950 font-sans">
          {title}
        </div>
        <div className="mt-2 mb-2 flex overflow-y-hidden overflow-x-auto">
          {listPopularCuisines.map((item) => (
            <div className="min-w-32 min-h-40" key={item.id}>
              <img src={imgCusUrl + item.imageId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
