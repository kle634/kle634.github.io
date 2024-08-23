import { useState } from 'react';
import  './Reservations.css'

function BookingPage() {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    // const availableTimes = [
    //     {time: "17:00"},
    //     {time: "18:00"},
    //     {time: "19:00"},
    //     {time: "20:00"},
    //   ];

    // const availableTimes = [
    //     "17:00",
    //     "18:00",
    //     "19:00",
    //     "22:00",
    //   ];

    const [availableTimes, setavailableTimes] = useState([
            '17:00',
            '18:00',
            '19:00',
            '22:00',
    ]);

    const arrayDataItems = availableTimes.map((time) => <option>{time}</option>);

    // Event handlers to update state variables
     const handleDateChange = (event) => {
        setDate(event.target.value);
        console.log(date);
     };
     const handleTimeChange = (event) => {
        setTime(event.target.value);
        console.log(time);
    };
    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
        console.log(guests);
    };
    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
        console.log(occasion);
    };

    const handleSubmit = (event) => {
        // validate(value);
        event.preventDefault();
        console.log("on submit");
    };

    function BookingForm() {
        return (
            <form className="res-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date:</label>
            <input onChange={handleDateChange} type="date" id="res-date" />
            <label htmlFor="res-time">Choose time:</label>
            <select id="res-time" onChange={handleTimeChange}>
                {arrayDataItems};
            </select>
            <label htmlFor="guests">Number of guests:</label>
            <input onChange={handleGuestsChange} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input id="res-submit" type="submit" value="Make Your reservation" />
            </form>
        )
    }


    return (
        <div>
            <BookingForm />
        </div>
    )
}

export {BookingPage};