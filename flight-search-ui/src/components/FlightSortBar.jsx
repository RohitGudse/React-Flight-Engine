import React from "react";

const FlightSortBar = ({ selectedSort, onSortChange, totalFlights }) => {
  const sortOptions = [
    { value: "price", label: "Lowest Price" },
    { value: "duration", label: "Shortest Duration" },
    { value: "departure", label: "Earliest Departure" },
  ];

  return (
    <div className="flight-sort-bar">
      <div className="flight-sort-info">
        <h3>Available Flights</h3>
        <span>{totalFlights} flights found</span>
      </div>

      <div className="flight-sort-control">
        <label htmlFor="flight-sort">Sort by:</label>

        <select
          id="flight-sort"
          value={selectedSort}
          onChange={(event) => onSortChange(event.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FlightSortBar;