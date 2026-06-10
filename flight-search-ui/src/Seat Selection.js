import React from "react";

export default function SeatSelection() {
  const seats = ["A1", "A2", "A3", "A4"];

  return (
    <div>
      <h2>Select Seat</h2>
      {seats.map((seat) => (
        <button key={seat}>{seat}</button>
      ))}
    </div>
  );
}