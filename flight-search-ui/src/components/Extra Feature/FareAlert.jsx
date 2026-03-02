// ==========================
// FareAlert.jsx
// ==========================
import { useState } from "react";

export function FareAlert(){
  const [price,setPrice]=useState("");

  return(
    <div>
      <h3>Set Price Alert</h3>
      <input
        placeholder="Enter target price"
        value={price}
        onChange={e=>setPrice(e.target.value)}
      />
      <button onClick={()=>alert("Alert set!")}>
        Notify Me
      </button>
    </div>
  );
}