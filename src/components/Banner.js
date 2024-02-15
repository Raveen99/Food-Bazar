import { bannerImgUrl } from "../utils/constants";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const Banner = (props) => {
  const { data } = props;

  return (
    <div className="banner-container">
      <div className="btn-container">
        <button className="arrow left">
          <LuArrowLeft size={17} />
        </button>

        <button className="arrow right">
          <LuArrowRight size={17} />
        </button>
      </div>
      <div className="banner-heading">
        <h2>What's on your mind?</h2>
      </div>

      <div className="image-container">
        {data.map((banner) => (
          <div className="banner" key={banner?.id}>
            <div className="banner-img">
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
