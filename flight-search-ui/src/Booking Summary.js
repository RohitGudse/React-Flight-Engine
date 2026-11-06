
import React from "react";

const BookingSummary = () => {
  const passengers = 2;
  const fare = 15000;

  return (
    <section className="card">
      <h2>Booking Summary</h2>

      <div>
        <span>Total Passengers:</span>
        <strong>{passengers}</strong>
      </div>

      <div>
        <span>Total Fare:</span>
        <strong>₹{fare.toLocaleString("en-IN")}</strong>
      </div>
    </section>
  );
};

export default BookingSummary;
