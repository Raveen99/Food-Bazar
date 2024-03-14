import ResMenuHeader from "../components/ResMenuHeader";
import useResMenu from "../hooks/useResMenu";
import { useParams } from "react-router-dom";
import ResOffer from "../components/ResOffer";
import PureVegButton from "../components/PureVegButton";
import MenuCategoryContainer from "../components/MenuCategoryContainer";

const ResMenu = () => {
  const { resId } = useParams();
  const { resMenuHeaderData, resOfferData, isPureVeg, topPicks, resMenu } =
    useResMenu(resId);

  //console.log("ResOffer: ", resOfferData);
  return (
    <div className="block max-w-4xl mt-5 mx-auto">
      <ResMenuHeader data={resMenuHeaderData} />
      <div className="pb-4 px-3 mt-5">
        <div className="flex overflow-x-auto overflow-y-hidden flex-col w-full">
          <div className="flex">
            {resOfferData.map((resOffer) => (
              <ResOffer key={resOffer?.info?.offerIds[0]} data={resOffer} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 ml-4">
        <PureVegButton isPureVeg={isPureVeg} />
      </div>
      <hr
        style={{
          borderBottom: "1px solid #d3d3d3",
          margin: "18px 0 0 18px",
        }}
      ></hr>
      {resMenu.map((menuCategory) => (
        <div>
          <div className="mt-6 mx-4 mb-4">
            <MenuCategoryContainer resMenu={menuCategory} />
          </div>

          <div className="h-4 border-b-8 border-solid"></div>
        </div>
      ))}
    </div>
  );
};
export default ResMenu;
