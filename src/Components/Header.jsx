import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  

  console.log(location);
  return (
    <header className="header">
      <h1 className="hItem1">Package Tracking App</h1>
      
      <ul className="hItem" >
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/packagetrack">Parcels/orders</Link>
        </div>
      </ul>
    </header>
  );
}
