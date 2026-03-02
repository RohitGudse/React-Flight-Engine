// ==========================
// SeatSelector.jsx
// ==========================
import { useState } from "react";

export function SeatSelector(){
  const [seat,setSeat]=useState(null);
  const seats=["1A","1B","1C","2A","2B","2C"];

  return(
    <div>
      <h3>Select Seat</h3>
      {seats.map(s=>(
        <button
          key={s}
          onClick={()=>setSeat(s)}
          style={{
            margin:5,
            background: seat===s ? "green" : "#eee"
          }}
        >
          {s}
        </button>
      ))}
      {seat && <p>Selected: {seat}</p>}
    </div>
  );
}