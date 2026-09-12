import React, { useState } from "react";

const FlightSearch = () => {
  const [flightDetails, setFlightDetails] = useState({
    from: "",
    to: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFlightDetails((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { from, to } = flightDetails;

    if (!from.trim() || !to.trim()) {
      setMessage("Please enter both departure and destination.");
      return;
    }

    if (from.trim().toLowerCase() === to.trim().toLowerCase()) {
      setMessage("Departure and destination cannot be the same.");
      return;
    }

    setMessage(`Searching flights from ${from} to ${to}...`);
  };

  return (
    <section className="flight-search">
      <div className="search-card">
        <h2>Search Flights</h2>
        <p>Enter your departure and destination to find flights.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="from">From</label>

            <input
              id="from"
              name="from"
              type="text"
              placeholder="Enter departure city"
              value={flightDetails.from}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="to">To</label>

            <input
              id="to"
              name="to"
              type="text"
              placeholder="Enter destination city"
              value={flightDetails.to}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Search Flights
          </button>
        </form>

        {message && (
          <p className="search-message">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default FlightSearch;