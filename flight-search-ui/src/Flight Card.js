import React from "react";

export default function FlightCard({ flight }) {
  return (
    <div className="card">
      <h3>{flight.airline}</h3>
      <p>{flight.from} → {flight.to}</p>
      <p>₹{flight.price}</p>
    </div>
  );
}