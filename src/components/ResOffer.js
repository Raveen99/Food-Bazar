import { LuBadgePercent } from "react-icons/lu";
const ResOffer = (props) => {
  const { couponCode, description, header, offerTag } = props?.data?.info;
  let iconStyle = {
    fontSize: "1.2rem",
    color: "brown",
    verticalAlign: "bottom",
    marginRight: "7px",
  };
  return (
    <div className="menu-offer-container">
      <div className="res-offer-wrapper">
        <div className="offer">
          <div className="info-wrapper">
            <div className="info-header">
              <LuBadgePercent style={iconStyle} />
              {header}
            </div>
            <div className="coupon-code-wrapper">
              <div className="coupon-code">
                {couponCode + " | " + description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResOffer;
