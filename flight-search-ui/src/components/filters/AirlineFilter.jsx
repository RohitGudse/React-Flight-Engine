export default function AirlineFilter({setFlights,allFlights}){
  const select=(air)=>{
    setFlights(allFlights.filter(f=>f.airline===air));
  };
  return(
    <select onChange={e=>select(e.target.value)}>
      <option value="">All Airlines</option>
      <option>IndiGo</option>
      <option>Air India</option>
      <option>SpiceJet</option>
      <option>Vistara</option>
    </select>
  )
}