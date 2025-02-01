import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./icons_assets/Logo.svg";

function Navbar() {
  return (
    <nav className="App">
      <div id="logo">
        <img src={logo} alt="" />
      </div>
      <div id="nav">
        <Link to="/" style={{ marginRight: "40px" }}>
          Home
        </Link>
        <Link to="/menu" style={{ marginRight: "40px" }}>
          Menu
        </Link>
        <Link to="/about" style={{ marginRight: "40px" }}>
          About
        </Link>
        <Link to="/reservations" style={{ marginRight: "40px" }}>
          Reservations
        </Link>
        <Link to="/order" style={{ marginRight: "40px" }}>
          OrderOnline
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
