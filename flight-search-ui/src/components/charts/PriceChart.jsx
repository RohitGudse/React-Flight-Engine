export function PriceChart({flights}){
  return(
    <div>
      <h4>Price Bars</h4>
      {flights.map(f=>(
        <div key={f.id} style={{margin:"4px 0"}}>
          {f.airline}
          <div style={{height:10,width:f.price/50,background:"teal"}} />
        </div>
      ))}
    </div>
  );
}