import { MdKeyboardArrowUp } from "react-icons/md";
import MenuItem from "./MenuItem";
import { useState } from "react";

const MenuCategoryContainer = ({ resMenu, showItem, showIndex }) => {
  const { title } = resMenu?.card?.card;
  const { itemCards, categories } = resMenu?.card?.card;
  const handleShowItem = () => {
    showIndex();
  };

  return itemCards ? (
    <div>
      <button
        id="menuDropDown"
        onClick={handleShowItem}
        className="w-full flex justify-between text-xl"
      >
        <div className="font-bold text-xl">{`${title} (${itemCards.length})`}</div>
        <span>
          <MdKeyboardArrowUp
            style={{
              fontSize: "1.6rem",
              transform: showItem ? "rotate(360deg)" : "rotate(180deg)",
            }}
          />
        </span>
      </button>
      {showItem && (
        <div>
          {itemCards.map((items) => (
            <div>
              <MenuItem key={items?.card?.info?.id} data={items?.card?.info} />
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
            onClick={handleShowItem}
            className="w-full flex justify-between text-lg"
          >
            <div className="text-base font-medium text-slate-900">{`${category?.title} (${category?.itemCards.length})`}</div>
            <span>
              <MdKeyboardArrowUp
                style={{
                  fontSize: "1.6rem",
                  transform: showItem ? "rotate(360deg)" : "rotate(180deg)",
                }}
              />
            </span>
          </button>
          {showItem && (
            <div>
              {category.itemCards.map((items) => (
                <div>
                  <MenuItem
                    key={items?.card?.info?.id}
                    data={items?.card?.info}
                  />
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
