import { useParams } from "react-router-dom";
import useResMenu from "../hooks/useResMenu";

const ResMenuHeader = () => {
  const { resId } = useParams();
  const resMenuHeaderData = useResMenu(resId);
  console.log("Data in resMenu: ", resMenuHeaderData);
  <div className="menu-header-container"></div>;
};
export default ResMenuHeader;
