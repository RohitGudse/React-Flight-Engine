import FlightCard from "./FlightCard";
import NoResults from "./NoResults";

export default function FlightList({flights}){
  if(!flights.length) return <NoResults/>;
  return(
    <div>
      {flights.map(f=><FlightCard key={f.id} flight={f}/>) }
    </div>
  )
}