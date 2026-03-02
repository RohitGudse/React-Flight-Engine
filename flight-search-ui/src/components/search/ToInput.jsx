export default function ToInput({value,setValue}){
  return(
    <input placeholder="To" value={value} onChange={e=>setValue(e.target.value)}/>
  )
}