import LOGO from "../img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo-container">
          <img src={LOGO} alt="logo" className="logo"></img>
        </div>
        <p className="name">Food Bazar</p>

        <ul className="items">
          <li className="item">Home</li>
          <li className="item">Search</li>
          <li className="item">Help</li>
          <li className="item">Sign In</li>
          <li className="item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
