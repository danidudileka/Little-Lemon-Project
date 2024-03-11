import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/confirmed");
    props.SubmitForm(e); //API is not working so needed to added useNavigate before this
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                type="date"
                required
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                value={occasion}
                key={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <button
                type="submit"
                area-label="on Click"
              >
                Make Your Reservation
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
