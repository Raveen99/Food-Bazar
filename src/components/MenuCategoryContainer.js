import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import MenuItem from "./MenuItem";
import { useState } from "react";

const MenuCategoryContainer = ({ resMenu }) => {
  const { title } = resMenu?.card?.card;
  const { itemCards, categories } = resMenu?.card?.card;
  //console.log("Data in Menu: ", itemCards ? itemCards : categories);

  const [openCategory, setOpenCategory] = useState(
    itemCards ? title : categories.map((category) => category.title)
  );

  console.log("Open Category: ", openCategory);

  const toggleDropDown = (categoryTitle) => {
    setOpenCategory((prevOpenCategory) => {
      if (itemCards)
        return prevOpenCategory === categoryTitle ? "" : categoryTitle;
      else {
        return prevOpenCategory.includes(categoryTitle)
          ? prevOpenCategory.filter((title) => title !== categoryTitle)
          : [...prevOpenCategory, categoryTitle];
      }
    });
  };

  return itemCards ? (
    <div>
      <button
        id="menuDropDown"
        onClick={() => toggleDropDown(title)}
        className="menu-dropdown"
      >
        <div className="menu-item-heading">{`${title} (${itemCards.length})`}</div>
        <span className="menu-expand">
          <MdKeyboardArrowUp
            style={{
              fontSize: "1.6rem",
              transform:
                openCategory === title ? "rotate(360deg)" : "rotate(180deg)",
            }}
          />
        </span>
      </button>
      {openCategory === title && (
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
      {categories.map((category) => (
        <div id={category.title} className="category-menu">
          <button
            onClick={() => toggleDropDown(category.title)}
            className="menu-dropdown"
          >
            <div className="menu-category-title">{`${category?.title} (${category?.itemCards.length})`}</div>
            <span className="menu-expand">
              <MdKeyboardArrowUp
                style={{
                  fontSize: "1.6rem",
                  transform: openCategory.includes(category.title)
                    ? "rotate(360deg)"
                    : "rotate(180deg)",
                }}
              />
            </span>
          </button>
          {openCategory.includes(category.title) && (
            <div>
              {category.itemCards.map((items) => (
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
