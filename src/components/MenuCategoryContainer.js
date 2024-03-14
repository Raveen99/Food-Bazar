import { MdKeyboardArrowUp } from "react-icons/md";
import MenuItem from "./MenuItem";
import { useState } from "react";

const MenuCategoryContainer = ({ resMenu }) => {
  //console.log("ResMenu: ", resMenu);

  const { title } = resMenu?.card?.card;
  const { itemCards, categories } = resMenu?.card?.card;
  const [openCategory, setOpenCategory] = useState(
    itemCards ? title : categories.map((category) => category.title)
  );

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
        className="w-full flex justify-between text-xl"
      >
        <div className="font-bold text-xl">{`${title} (${itemCards.length})`}</div>
        <span>
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
        <div>
          {itemCards.map((items) => (
            <div>
              <MenuItem key={items?.card?.info?.id} data={items} />
              <div className="border-b-[0.5px] border-solid border-gray-300 my-5"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : (
    <div>
      <div className="mb-6 font-bold text-xl">{title}</div>
      {categories.map((category) => (
        <div
          id={category.title}
          className="border-b-[0.5px] border-solid border-grey-300 mb-6"
        >
          <button
            onClick={() => toggleDropDown(category.title)}
            className="w-full flex justify-between text-lg"
          >
            <div className="text-base font-medium text-slate-900">{`${category?.title} (${category?.itemCards.length})`}</div>
            <span>
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
                  <div className="border-b-[0.5px] my-5"></div>
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
