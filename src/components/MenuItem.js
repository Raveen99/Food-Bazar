import { MdCurrencyRupee } from "react-icons/md";
import { menuItemsUrl } from "../utils/constants";
import veg from "../img/veg.png";
import nonVeg from "../img/nonVeg.png";
import { FaStar } from "react-icons/fa";

const MenuItem = (props) => {
  const { data } = props;
  const {
    name,
    price,
    defaultPrice,
    description,
    imageId,
    itemAttribute,
    isBestseller,
  } = data?.card?.info ?? " ";
  /*console.log("Item Name: ", name);
  console.log("Item price: ", price);
  console.log("Item Description: ", description);*/

  return (
    <div className="mt-4 pb-3">
      <div className="flex justify-between items-start">
        <div className="w-5/6">
          <div className="flex">
            {itemAttribute?.vegClassifier === "VEG" ? (
              <img className="w-4 h-4" src={veg}></img>
            ) : (
              <img className="w-4 h-4" src={nonVeg}></img>
            )}
            {isBestseller ? (
              <span className="ml-2 text-sm text-yellow-500">
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
          <div className="mt-1">
            <h3 className="mr-1 text-base font-medium break-words">{name}</h3>
          </div>
          <div className="flex mt-1 text-sm mr-2">
            <MdCurrencyRupee />
            <span className="-mt-[2px]">
              {price ? price / 100 : defaultPrice / 100}
            </span>
          </div>
          {description !== undefined ? (
            <div className="mt-3 leading-normal w-full tracking-tight text-sm text-gray-400">
              {description}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="relative ml-4 w-1/6 pt-5">
          {imageId !== undefined ? (
            <div>
              <button className="absolute left-6 top-32 w-2/3 h-8 bg-slate-50 shadow-md rounded-md border-[1PX] border-solid border-slate-300">
                <span className="text-green-600 text-sm font-medium">ADD+</span>
              </button>
              <img
                className="object-cover rounded-md w-full h-32"
                src={menuItemsUrl + imageId}
                alt={name}
              />
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
