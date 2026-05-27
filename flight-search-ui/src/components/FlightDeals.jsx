import React from "react";

const deals = [
  {
    route: "Mumbai → Dubai",
    price: "₹18,999",
  },
  {
    route: "Delhi → Bangkok",
    price: "₹14,500",
  },
  {
    route: "Goa → Singapore",
    price: "₹21,000",
  },
];

const FlightDeals = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Hot Flight Deals</h2>

      {deals.map((deal, index) => (
        <div
          key={index}
          className="flex justify-between p-3 border-b"
        >
          <span>{deal.route}</span>
          <span className="font-bold text-blue-600">
            {deal.price}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FlightDeals;