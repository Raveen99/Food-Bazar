import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import ResCard from "./ResCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopRest = ({ resData, resTitle }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2250 },
      items: 5,
      slidesToSlide: 3,
      partialVisibilityGutter: 20,
    },
    mediumDesktop: {
      breakpoint: { max: 2250, min: 2050 },
      items: 4,
      slidesToSlide: 3,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 2050, min: 1800 },
      items: 4,
      slidesToSlide: 3,
    },
    laptop: {
      breakpoint: { max: 1800, min: 1550 },
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 40,
    },
    largeTablet: {
      breakpoint: { max: 1550, min: 1390 },
      items: 3,
      slidesToSlide: 2,
    },
    mediumTablet: {
      breakpoint: { max: 1390, min: 650 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 120,
    },

    smallTable: {
      breakpoint: { max: 1270, min: 1060 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 40,
    },

    LargeMobile: {
      breakpoint: { max: 1060, min: 860 },
      items: 2,
      slidesToSlide: 2,
    },
    mediumMobile: {
      breakpoint: { max: 860, min: 700 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 230,
    },
    smallMobile: {
      breakpoint: { max: 700, min: 400 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 160,
    },
  };

  const CustomButtonTopRest = ({ next, previous, ...rest }) => {
    const { currentSlide, slidesToShow } = rest.carouselState;
    console.log("CurrSlide in top rest: ", rest);
    return (
      <div>
        <div className="mb-5 absolute right-0 left-0 top-0">
          <div className="text-xl font-bold">{resTitle}</div>
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
              currentSlide >= slidesToShow ? "opacity-50" : "opacity-100"
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
    <div className="p-4 relative lg:mx-[calc(10%+36px)] md:mx-[calc(5%+36px)] sm:mx-[calc(2%+36px)]">
      <Carousel
        className="px-0 py-10"
        responsive={responsive}
        arrows={false}
        partialVisbile={true}
        customButtonGroup={<CustomButtonTopRest />}
      >
        {resData.map((data) => (
          <div key={data?.info?.id} className="pl-4 pr-6 mt-4">
            <div className="w-80 h-auto">
              <ResCard resData={data} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopRest;
