import { motion } from "framer-motion";
import Badge from "../ui/Badge";

export default function FlightCard({flight}){
  return(
    <motion.div
      initial={{opacity:0,y:30}}
      animate={{opacity:1,y:0}}
      className="card"
    >
      <h3>{flight.airline}</h3>
      <p>{flight.from} → {flight.to}</p>
      <Badge text={flight.stops===0?"Non Stop":`${flight.stops} Stop`}/>
      <h2>₹{flight.price}</h2>
    </motion.div>
  )
}