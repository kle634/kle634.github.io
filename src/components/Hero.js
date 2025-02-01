// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./Hero.css";
import pic from "../icons_assets/restauranfood.jpg";

function Hero() {
  return (
    <div className="hero-main">
      <div id="hero-background"></div>
      <div id="hero-blurb">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/reservations">
          <button type="button" class="btn btn-hero" size="lg">
            Reserve a Table
          </button>
        </Link>
      </div>
      <div className="hero-pic">
        <img src={pic} id="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
