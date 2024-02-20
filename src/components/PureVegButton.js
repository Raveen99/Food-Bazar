import { LuLeaf } from "react-icons/lu";

const PureVegButton = ({ isPureVeg, onFilterToggle }) => {
  console.log("Data: ", isPureVeg);

  return isPureVeg === false ? (
    <div className="veg-only-button">
      <div className="veg-only">Veg only</div>
      <button className="switch" onClick={onFilterToggle}>
        <span className="toggle-switch">
          <span className="toggle-switch-thumb"></span>
        </span>
      </button>
    </div>
  ) : (
    <div className="veg-only-text">
      <span className="veg-only-logo">
        <LuLeaf style={{ transform: "rotate(270deg)", fill: "green" }} />
        <LuLeaf style={{ fill: "green", marginRight: "5px" }} />
      </span>
      Pure Veg
    </div>
  );
};

export default PureVegButton;
