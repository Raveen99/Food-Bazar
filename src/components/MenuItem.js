import { MdCurrencyRupee } from "react-icons/md";
import { menuItemsUrl } from "../utils/constants";
import veg from "../img/veg.png";
import nonVeg from "../img/nonVeg.png";
import { FaStar } from "react-icons/fa";

const MenuItem = (props) => {
  const { data } = props;
  const { name, price, description, imageId, itemAttribute, isBestseller } =
    data?.card?.info ?? " ";
  /*console.log("Item Name: ", name);
  console.log("Item price: ", price);
  console.log("Item Description: ", description);*/
  return (
    <div className="menu-item-container">
      <div className="menu-item">
        <div className="menu-items">
          <div className="menu-item-logo">
            {itemAttribute?.vegClassifier === "VEG" ? (
              <img className="item-type-img" src={veg}></img>
            ) : (
              <img className="item-type-img" src={nonVeg}></img>
            )}
            {isBestseller ? (
              <span className="bestseller">
                <FaStar
                  style={{
                    fontSize: "0.9rem",
                    marginRight: "5px",
                    color: "#ee9c00",
                    display: "inline",
                  }}
                />
                Bestseller
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="menu-item-name">
            <h3>{name}</h3>
          </div>
          <div className="menu-item-price">
            <MdCurrencyRupee />
            {+price / 100}
          </div>
          {description !== undefined ? (
            <div className="menu-item-description">{description}</div>
          ) : (
            ""
          )}
        </div>

        <div className="menu-item-img">
          {imageId !== undefined ? (
            <img className="item-img" src={menuItemsUrl + imageId} alt={name} />
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
