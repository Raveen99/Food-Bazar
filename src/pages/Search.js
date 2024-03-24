import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import PopularCuisine from "../components/Search/PopularCuisine";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { SEARCH_SUGGESTIONS_API_URL } from "../utils/constants";
import { cacheResults } from "../../store/cacheSlice";
import { Link } from "react-router-dom";
import SearchCard from "../components/Search/SearchCard";
import SearchRes from "../components/Search/SearchRes";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [showResDetail, setShowResDetail] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchData(searchCache[searchText]);
      } else {
        fetchData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const fetchData = async () => {
    try {
      const response = await fetch(SEARCH_SUGGESTIONS_API_URL + searchText);
      const json = await response.json();
      setSearchData(json?.data?.suggestions);
      dispatch(
        cacheResults({
          [searchText]: json?.data?.suggestions,
        })
      );
    } catch (error) {
      console.log("Error while fetching data: ", error);
    }
  };
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="block w-full pt-11 pb-2 overflow-x-scroll">
      <div className="h-12 w-[1000px] border border-solid border-slate-800 rounded-md mx-auto">
        <div className="flex items-center h-12 w-full justify-center p-4">
          <div className="w-full">
            <input
              type="text"
              className="w-full h-full text-lg border-none overflow-hidden text-ellipsis align-middle outline-none font-sans"
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={handleInputChange}
              onClick={() => setShowResDetail(false)}
            ></input>
          </div>
          <div className="text-lg">
            {!searchText ? (
              <LuSearch size={25} className="text-gray-600" />
            ) : (
              <RxCross2
                size={25}
                className="text-gray-600"
                onClick={() => setSearchText("")}
              />
            )}
          </div>
        </div>
      </div>
      {showResDetail && <SearchRes />}
      {!searchData && <PopularCuisine />}
      {!showResDetail &&
        searchData?.map((restaurant, i) => (
          <Link
            onClick={() => setShowResDetail(true)}
            to={`/search?query=${restaurant?.text}&selectedPLTab=${restaurant.type}`}
            key={`${restaurant?.cloudinaryId}-${i}`}
          >
            <SearchCard restaurant={restaurant} />
          </Link>
        ))}
    </div>
  );
};

export default Search;
