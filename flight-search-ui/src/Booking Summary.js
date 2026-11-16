
import React from "react";

const BookingSummary = () => {
  const bookingDetails = {
    passengers: [
      { id: 1, name: "Rohit", type: "Adult", price: 7500 },
      { id: 2, name: "Passenger 2", type: "Adult", price: 7500 },
    ],
    bookingStatus: "Confirmed",
    currency: "₹",
  };

  const totalPassengers = bookingDetails.passengers.length;

  const totalFare = bookingDetails.passengers.reduce(
    (total, passenger) => total + passenger.price,
    0
  );

  return (
    <section className="booking-summary card">
      <div className="summary-header">
        <h2>Booking Overview</h2>
        <span className="status">{bookingDetails.bookingStatus}</span>
      </div>

      <div className="passenger-list">
        {bookingDetails.passengers.map((passenger) => (
          <div className="passenger-item" key={passenger.id}>
            <div>
              <h4>{passenger.name}</h4>
              <small>{passenger.type}</small>
            </div>

            <strong>
              {bookingDetails.currency}
              {passenger.price.toLocaleString("en-IN")}
            </strong>
          </div>
        ))}
      </div>

      <div className="summary-footer">
        <div>
          <span>Total Passengers</span>
          <strong>{totalPassengers}</strong>
        </div>

        <div>
          <span>Grand Total</span>
          <strong>
            {bookingDetails.currency}
            {totalFare.toLocaleString("en-IN")}
          </strong>
        </div>
      </div>
    </section>
  );
};

export default BookingSummary;
