// import  './Reservations.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { submitAPI} from "../api.js";



function submitForm(formData) {
    if(submitAPI(formData)) {
        return (true);
    }
}

function ConfirmedBooking() {
    return (
        <h1>Booking Confirmed!</h1>
    )
}

export {submitForm, ConfirmedBooking};
