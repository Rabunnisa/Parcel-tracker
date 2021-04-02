import "../styles/package.css";
export default function Package(data){
    return(
<div class="package">
    <h1>Here is the list of orders/parcels </h1>
    {data.data.map(p=><div>{p.sender}</div>)}
    </div>
    )

}