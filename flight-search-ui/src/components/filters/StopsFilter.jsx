export default function StopsFilter({setFlights,allFlights}){
  return(
    <select onChange={e=>setFlights(allFlights.filter(f=>f.stops==e.target.value))}>
      <option value="">Stops</option>
      <option value="0">Non Stop</option>
      <option value="1">1 Stop</option>
    </select>
  )
}