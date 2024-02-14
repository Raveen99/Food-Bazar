import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import RestaurantCard from "./RestaurantCard";

const TopRest = ({ resData, resTitle }) => {
  return (
    <div className="toprest-container">
      <div className="btn-container">
        <button className="arrow">
          <LuArrowLeft size={17} />
        </button>

        <button className="arrow">
          <LuArrowRight size={17} />
        </button>
      </div>
      <div className="banner-heading">
        <h2>{resTitle}</h2>
      </div>

      <div className="topres-card">
        {resData.map((data) => (
          <div className="top-card">
            <div className="top-res">
              <RestaurantCard key={data?.info?.id} resData={data} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRest;
