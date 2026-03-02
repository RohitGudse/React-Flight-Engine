import { useState } from "react";
import FromInput from "./FromInput";
import ToInput from "./ToInput";
import DatePicker from "./DatePicker";
import PassengerSelector from "./PassengerSelector";
import CabinClass from "./CabinClass";
import Button from "../ui/Button";

export default function SearchForm({setFlights,allFlights}){
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");

  const search=()=>{
    const filtered=allFlights.filter(f=>
      f.from.toLowerCase().includes(from.toLowerCase()) &&
      f.to.toLowerCase().includes(to.toLowerCase())
    );
    setFlights(filtered);
  };

  return(
    <div className="searchBox">
      <FromInput value={from} setValue={setFrom}/>
      <ToInput value={to} setValue={setTo}/>
      <DatePicker/>
      <PassengerSelector/>
      <CabinClass/>
      <Button text="Search" onClick={search}/>
    </div>
  )
}
