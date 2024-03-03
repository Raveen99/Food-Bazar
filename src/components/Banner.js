import { bannerImgUrl } from "../utils/constants";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const Banner = (props) => {
  const { data } = props;

  return (
    <div className="relative mx-[calc(10%+36px)] p-4">
      <div className="flex absolute right-4">
        <button className="h-8 m-1 px-2 py-1 bg-gray-200 rounded-full opacity-50">
          <LuArrowLeft size={17} />
        </button>

        <button className="h-8 m-1 px-2 py-1 bg-gray-200 rounded-full opacity-100">
          <LuArrowRight size={17} />
        </button>
      </div>
      <div className="mb-5">
        <div className="text-xl font-bold">What's on your mind?</div>
      </div>

      <div className="flex -mx-4 overflow-y-hidden overflow-x-scroll">
        {data.map((banner) => (
          <div className="px-4 w-full" key={banner?.id}>
            <div className="w-36 h-44">
              <img
                src={bannerImgUrl + banner?.imageId}
                alt={banner?.action?.text}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
