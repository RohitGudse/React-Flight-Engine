
import React from "react";

const SORT_OPTIONS = [
  { value: "price", label: "Lowest Price" },
  { value: "duration", label: "Shortest Duration" },
  { value: "departure", label: "Earliest Departure" },
];

function FlightSortBar({ selectedSort, onSortChange, totalFlights }) {

  const handleSort = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <section className="flight-sort-bar">

      <div className="flight-sort-info">
        <h3>Available Flights</h3>
        <p>
          Showing {totalFlights} available flights
        </p>
      </div>

      <div className="flight-sort-control">
        <label htmlFor="flight-sort">
          Sort Flights:
        </label>

        <select
          id="flight-sort"
          value={selectedSort}
          onChange={handleSort}
        >
          {SORT_OPTIONS.map(({ value, label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

    </section>
  );
}

export default FlightSortBar;
