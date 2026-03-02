// ==========================
// TicketSummary.jsx
// ==========================
export function TicketSummary({flight}){
  return(
    <div style={{border:"1px solid #ccc",padding:10}}>
      <h3>{flight.airline}</h3>
      <p>{flight.from} → {flight.to}</p>
      <h2>₹{flight.price}</h2>
    </div>
  );
}