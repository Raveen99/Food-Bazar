import LOGO from "../img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="logo-container">
          <img src={LOGO} alt="logo" className="logo"></img>
          <p className="name">Food Bazar</p>
        </div>

        <div className="items-container">
          <ul>
            <li className="item">Cart</li>
            <li className="item">Sign In</li>
            <li className="item">Help</li>
            <li className="item">Offers</li>
            <li className="item">Search</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
