import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './icons_assets/Logo.svg';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";


function App() {
  return (
    <nav className="App">
      <img src={logo}/>
      <div id="nav">
        <Link to="/" style={{margin: '10px'}}>Home</Link>
        <Link to="/about" style={{margin: '10px'}}>About</Link>
        <Link to="/menu" style={{margin: '10px'}}>Menu</Link>
        <Link to="/reservations" style={{margin: '10px'}}>Reservations</Link>
        <Link to="/order" style={{margin: '10px'}}>OrderOnline</Link>
        <Link to="/login">Login</Link>
      </div>
    {/*<Link to="/hero">Hero</Link>
    <Link to="/highlights">Highlights</Link>
    <Link to="/testimonials">Testimonials</Link>
    <Link to="/footer">Footer</Link> */}
    <div className="route">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  </nav>
  )
}

export default App
