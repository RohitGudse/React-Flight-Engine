export default function FromInput({value,setValue}){
  return(
    <input placeholder="From" value={value} onChange={e=>setValue(e.target.value)}/>
  )
}