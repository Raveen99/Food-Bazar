import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import ResCard from "./ResCard";

const TopRest = ({ resData, resTitle }) => {
  return (
    <div className="toprest-container">
      <div className="btn-container">
        <button className="arrow left">
          <LuArrowLeft size={17} />
        </button>

        <button className="arrow right">
          <LuArrowRight size={17} />
        </button>
      </div>
      <div className="banner-heading">
        <h2>{resTitle}</h2>
      </div>

      <div className="topres-card">
        {resData.map((data) => (
          <div key={data?.info?.id} className="top-card">
            <div className="top-res">
              <ResCard resData={data} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRest;
