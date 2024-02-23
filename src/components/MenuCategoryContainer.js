import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import MenuItem from "./MenuItem";
import { useState } from "react";

const MenuCategoryContainer = ({ resMenu }) => {
  const { title } = resMenu?.card?.card;
  const { itemCards, categories } = resMenu?.card?.card;
  console.log("Data in Menu: ", itemCards ? itemCards : categories);

  const iconStyle = { fontSize: "1.6rem", transform: "rotate(180deg)" };

  const [isOpen, setIsOpen] = useState(true);
  const expandMenu = () => {
    setIsOpen(!isOpen);
  };
  return itemCards ? (
    <div>
      <button
        id="menuDropDown"
        onClick={expandMenu}
        className="menu-dropdown menu-dropdown-open"
      >
        <div className="menu-item-heading">{`${title} (${itemCards.length})`}</div>
        <span className="menu-expand">
          <MdKeyboardArrowUp style={iconStyle} />
        </span>
      </button>
      {isOpen && (
        <div id="menuContainer">
          {itemCards.map((items) => (
            <div>
              <MenuItem key={items?.card?.info?.id} data={items} />
              <div className="menu-items-divider"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : (
    <div>
      <div className="menu-category-heading">{title}</div>
      {categories.map((items) => (
        <div>
          <button onClick={expandMenu} className="menu-dropdown">
            <div className="menu-category-title">{`${items?.title} (${items?.itemCards.length})`}</div>
            <span className="menu-expand">
              <MdKeyboardArrowUp style={iconStyle} />
            </span>
          </button>
          {isOpen && (
            <div>
              {items.itemCards.map((items) => (
                <div>
                  <MenuItem key={items?.card?.info?.id} data={items} />
                  <div className="menu-items-divider"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default MenuCategoryContainer;
