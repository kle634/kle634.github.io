import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import logo from './icons_assets/Logo.svg';

function App() {
  return (
    <nav className="App">
      <div id="logo"><img src={logo} alt="" /></div>
      <div id="nav">
        <Link to="/" style={{marginRight: '40px'}}>Home</Link>
        <Link to="/about" style={{marginRight: '40px'}}>About</Link>
        <Link to="/menu" style={{marginRight: '40px'}}>Menu</Link>
        <Link to="/reservations" style={{marginRight: '40px'}}>Reservations</Link>
        <Link to="/order" style={{marginRight: '40px'}}>OrderOnline</Link>
        <Link to="/login">Login</Link>
      </div>
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
