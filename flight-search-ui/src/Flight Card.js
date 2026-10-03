import React from "react";

const FlightCard = ({ flight: { airline, from, to, price } }) => {
  return (
    <div className="card">
      <h3>{airline}</h3>

      <p>
        {from} → {to}
      </p>

      <strong>₹{price}</strong>
    </div>
  );
};

export default FlightCard;