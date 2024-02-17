import { useState, useEffect } from "react";
import { resMenuUrl } from "../utils/constants";

const useResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response = await fetch(resMenuUrl + resId);
    const json = await response.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useResMenu;
