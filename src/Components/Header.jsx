import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const imageObject =require("../assets/logo2.jpg");
  const imageURL=imageObject.default;

  

  console.log(location);
  return (
    <header className="header">
      <h1 class="hItem1">Fast Delivery Services</h1>
      
      <ul className="hItem" >
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/packagetrack">Parcels/orders</Link>
        </div>
      </ul>
      <div class="hItem2">
        <p>Welcome Jhon Doe</p>
      </div>
      <div class="p3">
      <img class ="p4"src={imageURL} alt="this is the logo" width="60" height= "60"/>
      </div>
      
    </header>
  );
}
