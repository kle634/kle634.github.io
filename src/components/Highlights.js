import Card from 'react-bootstrap/Card';
import './Highlights.css';
import saladImg from '../icons_assets/greek salad.jpg';
import bruchettaImg from '../icons_assets/bruchetta.svg';
import lemonImg from '../icons_assets/lemon dessert.jpg';


function Highlights() {
    return (
        <div className="highlights-main">
            <div className="highlights-sub">
                <h1 id="specials">This weeks specials!</h1>
                <button type="button" class="btn btn-specials" size="lg">Online Menu</button>
            </div>
            <div className="cards-grid">
                <Card className="greek-salad">
                    <Card.Img id="img-salad" variant="top" src={saladImg} />
                    <Card.Body>
                        <Card.Title id="name">Greek Salad</Card.Title>
                        <Card.Title id="price">$12.99</Card.Title>
                        <Card.Text>
                        The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese.  Garnished with crunchy garlic and rosemary croutons.
                        </Card.Text>
                        <button variant="primary" class="btn btn-highlights">Order a delivery</button>
                    </Card.Body>
                </Card>
                <Card className="bruchetta">
                    <Card.Img id="img-bruchetta" variant="top" src={bruchettaImg} />
                    <Card.Body>
                        <Card.Title id="name">Bruchetta</Card.Title>
                        <Card.Title id="price">$5.99</Card.Title>
                        <Card.Text>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </Card.Text>
                        <button variant="primary" class="btn btn-highlights">Order a delivery</button>
                    </Card.Body>
                </Card>
                <Card className="lemon-dessert">
                    <Card.Img id="img-dessert" variant="top" src={lemonImg} />
                    <Card.Body>
                        <Card.Title id="name">Lemon Dessert</Card.Title>
                        <Card.Title id="price">$5.00</Card.Title>
                        <Card.Text>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </Card.Text>
                        <button variant="primary" class="btn btn-highlights">Order a delivery</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Highlights;