import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import  './Reservations.css';
import {fetchAPI} from "../api.js";
import {submitForm} from "./ConfirmedBooking"
import { useNavigate } from "react-router-dom";

function BookingPage() {
    let availableTimes = [];

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');;

    function initializeTimes() {
        let date = new Date();
        availableTimes = fetchAPI(date);
        return (availableTimes);
    }

    function reducer(state, action) {
        switch(action.type) {
            case 'UPDATE':
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
        if(submitForm(event.target)) {
            navigate('/confirmed');
        };
    }

    function BookingForm() {
        //Initialize availableTimes with initial state
        const[state, dispatch] = useReducer(reducer, initializeTimes());

        console.log("available times", availableTimes)

        function updateTimes(event) {
            let date = new Date(event.target.value);
            dispatch({type: 'UPDATE', setDate: date});
        }

        const arrayDataItems = availableTimes.map((time) => <option>{time}</option>);
        // debugger;
        return (
            <form className="res-form" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date:</label>
                <input onChange={updateTimes} type="date" id="res-date" />
                <label htmlFor="res-time">Choose time:</label>
                <select id="res-time">
                    {arrayDataItems}
                </select>
                <label htmlFor="guests">Number of guests:</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion:</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input id="res-submit" type="submit" />
            </form>
        )
    }

    return (
        <div>
            <BookingForm />
            {/* onSubmit={(e) => {submitForm(e.target); e.preventDefault();} */}
        </div>
    )
}

export default BookingPage;