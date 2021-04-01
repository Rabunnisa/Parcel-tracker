/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect ,useState} from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Package from "./pages/Package"

export default function App() {
const [status ,setStatus]= useState(0);
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
  setStatus(2);
  data.forEach(p=>console.log(p.sender))
}

function onFetchFail(error){
  console.error("Hello,we have an error :(", error);
  setStatus(1);
}

return (
    <div className="App">
      
      <BrowserRouter>
        {/* The header is outside the Switch to make it available all the time */}
         <Switch>
          <Route component={Home} path="/" exact />
          <Route path="/p" ><Package data={data}/> </Route>
          {/* <Route component={Video} path="/video/:id" /> */}
          {/* <Route component={SearchResults} path="/results/:query" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}