import Card from 'react-bootstrap/Card';
import './Highlights.css';
import salad from '../icons_assets/greek salad.jpg';

function Highlights() {
    return (
        <div className="highlights-main">
            <div className="highlights-sub">
                <h1 id="specials">This weeks specials!</h1>
                <button type="button" class="btn btn-primary-highlights" size="lg">Online Menu</button>
            </div>
            <div className="cards-grid">
                <Card className="greek-salad">
                    <Card.Img id="img-salad" variant="top" src={salad} />
                    <Card.Body>
                        <Card.Title id="name">Greek Salad</Card.Title>
                        <Card.Title id="price">$12.99</Card.Title>
                        <Card.Text>
                        The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese.  Garnished with crunchy garlic and rosemary croutons.
                        </Card.Text>
                        <button variant="primary">Order a delivery</button>
                    </Card.Body>
                    </Card>
            </div>
        </div>
    )
}

export default Highlights;