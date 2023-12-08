import "./navbar.css";
import logo from "../../assets/photofolio.png";

export default function Navbar(props) {
  const { setOpenImages } = props;
  return (
    <div className="navbar">
      <div
        className="navbar-logo"
        onClick={() => {
          //onClick will return to the home page
          setOpenImages(false);
        }}
      >
        <img src={logo} alt="Logo" />
        <span>PhotoFolio</span>
      </div>
    </div>
  );
}
