import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import BookingPage from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import { ConfirmedBooking } from "./components/ConfirmedBooking";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/order" element={<OrderOnline />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
