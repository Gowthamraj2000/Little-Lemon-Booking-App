// src/components/BookingForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookingForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send the data to the server or process it
    console.log('Booking Details:', { name, date, time, people, contact });
    setSubmitted(true);
  };

  return (
    <div className="booking-form">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            minDate={new Date()}
            dateFormat="yyyy/MM/dd"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="people">Number of People:</label>
          <input
            type="number"
            id="people"
            name="people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            min="1"
            max="10"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Info:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <button type="submit">Book Now</button>
      </form>

      {submitted && (
        <div className="confirmation">
          <p>Your table has been booked successfully!</p>
          <p>Booking Details:</p>
          <p>Name: {name}</p>
          <p>Date: {date.toLocaleDateString()}</p>
          <p>Time: {time}</p>
          <p>People: {people}</p>
          <p>Contact: {contact}</p>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
