/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect ,useState} from "react";
import PackageItem from "../Components/PackageItem"
export default function PackageFetch () {

    const[data,setData]=useState([]);
    
    const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
    
    
    useEffect( () =>{
    fetch(API_URL)
    .then((response) => response.json())
    .then(data=>onFetchSuccess(data))
    .catch(onFetchFail);
    },[]);
    
    function onFetchSuccess(json){
      setData(json);
      
      data.forEach(p=>console.log(p.sender))
    }
    
    function onFetchFail(error){
      console.error("Hello,we have an error :(", error);
      
    }
    const pArray = data.map((item) => (
      <PackageItem key={item.id} data={item} />
    ));
    
    return (
        <div className="App">
          
          {/* {data.map(p=><div>{p.user_name},{p.sender},{p.eta}</div> */}
          {/* )} */}
          <div className="grid">{pArray}</div>
        </div>
      );
    }