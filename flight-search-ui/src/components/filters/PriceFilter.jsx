export default function PriceFilter({setFlights,allFlights}){
  return(
    <input type="range" min="0" max="10000"
      onChange={e=>{
        const v=e.target.value;
        setFlights(allFlights.filter(f=>f.price<=v));
      }}
    />
  )
}