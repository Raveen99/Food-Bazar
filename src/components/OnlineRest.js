import ResCard from "./ResCard";
import Filter from "./Filter";
const OnlineRest = ({ resTitle, resData }) => {
  return (
    <div className="res-container">
      <div className="res-heading">
        <h2>{resTitle}</h2>
      </div>
      <Filter data={resData} />

      <div className="res-cards">
        {resData.map((restaurant) => (
          <ResCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default OnlineRest;
