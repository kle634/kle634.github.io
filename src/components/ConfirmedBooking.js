// import  './Reservations.css';
import React from "react";
import { submitAPI } from "../api.js";

function submitForm(formData) {
  if (submitAPI(formData)) {
    // console.log(formData.get("name"));
    return true;
  }
}

function ConfirmedBooking(formData) {
  return <div className="message">Your booking has been confirmed!</div>;
}

export { submitForm, ConfirmedBooking };
