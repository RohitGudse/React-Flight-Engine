 import React, { useState } from "react";

export default function PriceFilter() {
  const [price, setPrice] = useState(5000);

  return (
    <div>
      <input
        type="range"
        min="1000"
        max="20000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <p>Max Price: ₹{price}</p>
    </div>
  );
}