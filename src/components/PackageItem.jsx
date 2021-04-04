
export default function PackageItem({ data }) {
  return(
<div>

<ol class="item1" >
  <li >{data.parcel_id}</li>
 <li > {data.sender}</li>
 <li > {data.status}</li>
 <p >{data.location_name} </p>
 <li > {data.eta}</li>
  </ol>
    </div>)
}