import ResMenuHeader from "../components/ResMenuHeader";
import useResMenu from "../hooks/useResMenu";
import { useParams } from "react-router-dom";
import ResOffer from "../components/ResOffer";

const ResMenu = () => {
  const { resId } = useParams();
  const { resMenuHeaderData, resOfferData } = useResMenu(resId);
  console.log("Data: ", resOfferData);

  return (
    <div className="resmenu-container">
      <ResMenuHeader data={resMenuHeaderData} />
      <div className="resoffer-container">
        <div className="res-offers">
          <div className="offers-slider">
            {resOfferData.map((resOffer) => (
              <ResOffer key={resOffer?.info?.offerIds[0]} data={resOffer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResMenu;
