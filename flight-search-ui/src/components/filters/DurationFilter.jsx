export default function DurationFilter({setFlights,allFlights}){
  return(
    <input type="number" placeholder="Max Duration"
      onChange={e=>setFlights(allFlights.filter(f=>f.duration<=e.target.value))}/>
  )
}