// ==========================
// BookingProgress.jsx
// ==========================
export function BookingProgress({step}){
  const steps=["Search","Select","Passenger","Payment","Done"];

  return(
    <div style={{display:"flex",gap:10}}>
      {steps.map((s,i)=>(
        <div
          key={i}
          style={{
            padding:"6px 12px",
            borderRadius:20,
            background: i<=step ? "green" : "#ddd",
            color:"white"
          }}
        >
          {s}
        </div>
      ))}
    </div>
  );
}