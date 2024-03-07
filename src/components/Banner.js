import Carousel from "react-multi-carousel";
import { bannerImgUrl } from "../utils/constants";
import "react-multi-carousel/lib/styles.css";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const NewBanner = (props) => {
  const { data } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1900 },
      items: 10,
      slidesToSlide: 3,
    },
    mediumDesktop: {
      breakpoint: { max: 1900, min: 1500 },
      items: 7,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1200 },
      items: 6,
      slidesToSlide: 3,
    },
    laptop: {
      breakpoint: { max: 1200, min: 1000 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 850 },
      items: 4,
      slidesToSlide: 2,
    },
    largeMobile: {
      breakpoint: { max: 850, min: 650 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const CustomButtonGroup = ({ next, previous, ...rest }) => {
    const { currentSlide, slidesToShow } = rest.carouselState;
    console.log("CurrSlide: ", rest);
    return (
      <div>
        <div className="mb-5 absolute right-0 left-0 top-0">
          <div className="text-xl font-bold">What's on your mind?</div>
        </div>
        <div className="flex absolute right-4 top-0">
          <button
            className={`h-8 m-1 px-2 py-1 bg-gray-200 rounded-full ${
              currentSlide <= 0 ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => previous()}
          >
            <LuArrowLeft size={17} />
          </button>

          <button
            className={`h-8 m-1 px-2 py-1 bg-gray-200 rounded-full opacity-100 ${
              currentSlide >= data.length - slidesToShow
                ? "opacity-50"
                : "opacity-100"
            }`}
            onClick={() => next()}
          >
            <LuArrowRight size={17} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative mx-[calc(10%+36px)] p-4">
      <Carousel
        className="px-0 py-10"
        responsive={responsive}
        arrows={false}
        customButtonGroup={<CustomButtonGroup />}
      >
        {data.map((banner, index) => (
          <div className="px-4 w-full transition duration-300" key={banner?.id}>
            <div className="w-36 h-44">
              <img
                src={bannerImgUrl + banner?.imageId}
                alt={banner?.action?.text}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewBanner;
