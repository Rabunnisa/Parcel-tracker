
export default function PackageItem({ data }) {



  
return(
<div>

<div className="right">
  
 <div className="item1"  > 
 <p className="subitem1">Package-Number : {data.parcel_id}</p>
 <p >Sender : {data.sender}</p>
 <p className="subitem2">Order-status : {data.status}</p>
 <time className="date" >ETA : {data.eta}</time>
 <p >location_name : {data.location_name} </p>
 <p >Last-Updated : {data.last_updated} </p>
   </div>
    </div>
    </div>)
}