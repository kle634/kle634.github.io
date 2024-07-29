import './Hero.css';
import pic from '../icons_assets/restauranfood.jpg';

function Hero() {
    return (
    <div className="main">
        <div id="background"></div>
        <div id="blurb">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div id="pic">
            <img src={pic}/>
        </div>
    </div>
    )
}

export default Hero;