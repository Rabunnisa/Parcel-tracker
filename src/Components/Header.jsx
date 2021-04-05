import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const imageObject =require("../assets/logo2.jpg");
  const imageURL=imageObject.default;

  

  console.log(location);
  return (
    <header className="header">
      <h1 class="hItem1">Fast Delivery App</h1>
      
      <div class="linkItems" >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/packagetrack">Packages</Link>
          </li>
      </div>
      <div class="hItem2">
        <p>Welcome Jhon Doe</p>
      </div>
      <div class="p3">
      <img class ="p4"src={imageURL} alt="this is the logo" width="60" height= "60"/>
      </div>
      
    </header>
  );
}
