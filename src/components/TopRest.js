import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import ResCard from "./ResCard";

const TopRest = ({ resData, resTitle }) => {
  return (
    <div className="p-4 relative mx-[calc(10%+36px)]">
      <div className="flex absolute right-4">
        <button className="h-8 m-1 px-2 py-1 bg-gray-200 rounded-full opacity-50">
          <LuArrowLeft size={17} />
        </button>

        <button className="h-8 m-1 px-2 py-1 bg-gray-200 rounded-full opacity-100">
          <LuArrowRight size={17} />
        </button>
      </div>
      <div className="mb-6">
        <div className="text-xl font-bold">{resTitle}</div>
      </div>

      <div className="flex overflow-x-scroll overflow-y-hidden -mx-4">
        {resData.map((data) => (
          <div key={data?.info?.id} className="pl-4 pr-6 w-full">
            <div className="w-80 h-auto">
              <ResCard resData={data} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRest;
