import ResCard from "./ResCard";
import Filter from "./Filter";
const OnlineRest = ({ resTitle, resData }) => {
  return (
    <div className="mx-[calc(10%+36px)] p-4">
      <div className="mb-4">
        <div className="text-xl font-bold">{resTitle}</div>
      </div>
      <Filter data={resData} />

      <div className="grid grid-cols-4 gap-8 items-start">
        {resData.reverse().map((restaurant) => (
          <ResCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default OnlineRest;
