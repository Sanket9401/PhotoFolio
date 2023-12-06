import "./navbar.css";
import logo from "../../assets/photofolio.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>PhotoFolio</span>
      </div>
    </div>
  );
}
