import React from "react";

export default function AirlineList() {
  const airlines = ["IndiGo", "Air India", "Akasa"];

  return (
    <ul>
      {airlines.map((a) => (
        <li key={a}>{a}</li>
      ))}
    </ul>
  );
}