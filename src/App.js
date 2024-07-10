import {BrowserRouter as Router, Switch, Routes, Link, Route} from "react-router-dom";
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
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/menu">Menu</Link>
    <Link to="/reservations">Reservations</Link>
    <Link to="/order">OrderOnline</Link>
    <Link to="/login">Login</Link>
    {/*<Link to="/hero">Hero</Link>
    <Link to="/highlights">Highlights</Link>
    <Link to="/testimonials">Testimonials</Link>
    <Link to="/footer">Footer</Link> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  </nav>
  )
}

export default App
