import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import "./Reservations.css";
import { fetchAPI } from "../api.js";
import { submitForm } from "./ConfirmedBooking";
import { useNavigate } from "react-router-dom";
import cake from "../icons_assets/lemon dessert.jpg";
import chef from "../icons_assets/restaurant chef B.jpg";
import seating from "../icons_assets/restaurant.jpg";

function BookingPage() {
  let availableTimes = [];

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  function initializeTimes() {
    let date = new Date();
    availableTimes = fetchAPI(date);
    return availableTimes;
  }

  function reducer(state, action) {
    switch (action.type) {
      case "UPDATE":
        // console.log("i'm here in reducer")
        availableTimes = fetchAPI(action.setDate);
        return availableTimes;
      default:
        // console.log(state);
        return state;
    }
  }

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (submitForm(event.target)) {
      navigate("/confirmed");
    }
  }

  function BookingForm() {
    //Initialize availableTimes with initial state
    const [state, dispatch] = useReducer(reducer, initializeTimes());

    console.log("available times", availableTimes);

    function updateTimes(event) {
      let date = new Date(event.target.value);
      dispatch({ type: "UPDATE", setDate: date });
    }

    const arrayDataItems = availableTimes.map((time) => (
      <option>{time}</option>
    ));
    // debugger;
    return (
      <form className="res-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="First and Last Name" required />
        <label htmlFor="number">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="(xxx)-xxx-xxxx"
          required
        />
        <label htmlFor="res-date">Choose date:</label>
        <input onChange={updateTimes} type="date" id="res-date" required />
        <label htmlFor="res-time">Choose time:</label>
        <select id="res-time">{arrayDataItems}</select>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          required
        />
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
          <option>None</option>
        </select>
        <input id="res-submit" type="submit" />
      </form>
    );
  }

  return (
    <div className="res-main">
      {/* <div id="res-title">Reservations</div> */}
      <h1 id="res-title">Reservations</h1>
      <BookingForm />
      {/* onSubmit={(e) => {submitForm(e.target); e.preventDefault();} */}
      <div id="res-images">
        <img src={cake} id="cake-img" />
        <img src={chef} id="chef-img" />
        <img src={seating} id="seating-img" />
      </div>
    </div>
  );
}

export default BookingPage;
