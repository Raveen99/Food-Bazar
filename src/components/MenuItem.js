import { MdCurrencyRupee } from "react-icons/md";
import { menuItemsUrl } from "../utils/constants";
const MenuItem = (props) => {
  const { data } = props;
  const { name, price, description, imageId } = data?.card?.info ?? " ";
  /*console.log("Item Name: ", name);
  console.log("Item price: ", price);
  console.log("Item Description: ", description);*/
  return (
    <div className="menu-item-container">
      <div className="menu-item">
        <div className="menu-items">
          <div className="menu-item-logo"></div>
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
