// import Button from 'react-bootstrap/Button';
import './Hero.css';
import pic from '../icons_assets/restauranfood.jpg';

function Hero() {
    return (
    <div className="hero-main">
        <div id="hero-background"></div>
        <div id="hero-blurb">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button type="button" class="btn btn-primary-hero" size="lg">Reserve a Table</button>
        </div>
        <div id="hero-pic">
            <img src={pic}/>
        </div>
    </div>
    )
}

export default Hero;