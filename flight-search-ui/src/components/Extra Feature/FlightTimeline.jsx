// ==========================
// FlightTimeline.jsx
// ==========================
export function FlightTimeline({flight}){
  return(
    <div style={{borderLeft:"3px solid gray",paddingLeft:10}}>
      <p>Departure: {flight.from}</p>
      <p>✈ Flight Time {flight.duration}h</p>
      <p>Arrival: {flight.to}</p>
    </div>
  );
}