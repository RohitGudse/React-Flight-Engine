// ==========================
// LayoverInfo.jsx
// ==========================
export function LayoverInfo({stops}){
  return(
    <div>
      {stops===0
        ? "Direct Flight"
        : `Layover Stops: ${stops}`}
    </div>
  );
}