
import React from "react";

const FlightCard = ({ flight }) => {
  const {
    airline = "Unknown Airline",
    from = "Mumbai",
    to = "Delhi",
    price = 0,
    duration = "2h 15m",
    departure = "09:30 AM",
    arrival = "11:45 AM",
  } = flight || {};

  const formattedPrice = new Intl.NumberFormat("en-IN").format(price);

  const handleBooking = () => {
    alert(`Booking selected: ${airline} (${from} to ${to})`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">

      {/* Airline Information */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {airline}
          </h2>
          <span className="text-sm text-gray-500">
            Flight Information
          </span>
        </div>

        <span className="text-3xl">✈️</span>
      </div>

      {/* Flight Route */}
      <div className="flex items-center justify-between gap-3">

        <div>
          <p className="text-2xl font-bold text-gray-900">
            {departure}
          </p>
          <p className="text-sm text-gray-500">
            {from}
          </p>
        </div>

        <div className="flex-1 text-center">
          <p className="text-xs text-gray-500 mb-1">
            {duration}
          </p>
          <div className="border-t-2 border-dashed border-blue-400 relative">
            <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-2">
              ✈
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Direct Flight
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">
            {arrival}
          </p>
          <p className="text-sm text-gray-500">
            {to}
          </p>
        </div>

      </div>

      {/* Price and Booking */}
      <div className="flex justify-between items-center border-t mt-6 pt-5">
        <div>
          <p className="text-sm text-gray-500">
            Starting Price
          </p>
          <h3 className="text-2xl font-extrabold text-blue-600">
            ₹{formattedPrice}
          </h3>
        </div>

        <button
          onClick={handleBooking}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition-colors"
        >
          Book Now
        </button>
      </div>

    </div>
  );
};

export default FlightCard;
