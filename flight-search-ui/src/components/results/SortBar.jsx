export default function SortBar({sortFlights}){
  return(
    <div>
      <button onClick={()=>sortFlights("price")}>Sort by Price</button>
      <button onClick={()=>sortFlights("duration")}>Sort by Duration</button>
    </div>
  )
}