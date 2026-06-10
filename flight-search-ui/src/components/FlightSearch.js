import React, { useState } from "react";

export default function FlightSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div className="card">
      <h2>Search Flights</h2>
      <input
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}