import React, { useState, useEffect } from "react";

const FlightStatus = () => {
  // Flight information state
  const [flightInfo, setFlightInfo] = useState({
    flightNumber: "AI-202",
    airline: "Air India",
    departure: "Mumbai",
    destination: "Delhi",
    departureTime: "10:30 AM",
    arrivalTime: "12:45 PM",
    gate: "B12",
    terminal: "Terminal 2",
    status: "On Time",
  });

  const [statusColor, setStatusColor] = useState("text-green-600");

  useEffect(() => {
    switch (flightInfo.status) {
      case "On Time":
        setStatusColor("text-green-600");
        break;
      case "Delayed":
        setStatusColor("text-yellow-500");
        break;
      case "Cancelled":
        setStatusColor("text-red-600");
        break;
      default:
        setStatusColor("text-blue-600");
    }
  }, [flightInfo.status]);

  const updateFlightStatus = () => {
    const statusList = [
      "On Time",
      "Delayed",
      "Boarding",
      "Cancelled",
    ];

    const randomStatus =
      statusList[Math.floor(Math.random() * statusList.length)];

    setFlightInfo((prevData) => ({
      ...prevData,
      status: randomStatus,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-lg p-6 border">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Flight Status Dashboard
      </h1>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span className="font-semibold">Flight Number</span>
          <span>{flightInfo.flightNumber}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Airline</span>
          <span>{flightInfo.airline}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Departure</span>
          <span>{flightInfo.departure}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Destination</span>
          <span>{flightInfo.destination}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Departure Time</span>
          <span>{flightInfo.departureTime}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Arrival Time</span>
          <span>{flightInfo.arrivalTime}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Terminal</span>
          <span>{flightInfo.terminal}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Gate</span>
          <span>{flightInfo.gate}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Current Status</span>

          <span className={`font-bold ${statusColor}`}>
            {flightInfo.status}
          </span>
        </div>

      </div>

      <button
        onClick={updateFlightStatus}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
      >
        Refresh Flight Status
      </button>
    </div>
  );
};

export default FlightStatus;