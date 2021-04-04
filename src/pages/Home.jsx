import { Link } from "react-router-dom";

export default function Home() {
  const imageObject =require("../assets/logo2.jpg");
  const imageURL=imageObject.default;
  return (
    
    <section className="home">
      <h2>Our solutions connect people and possibilities.</h2>
      <div class="p1">Connecting people with goods, services and ideas creates opportunities and improves lives. We believe that a connected world is a better world, and that belief guides everything we do.</div>
      {/* <Link className="link" to="/packagetrack">
        Click Here to package
      </Link> */}
      <div class="Main">
        <h4>Fast Delivery has grown and placed itself as an ultimate service provider in the Courier Industry. We have already registered our presence with our exclusive and largest network in the courier and express industry across the world. We have created bonds among all around us and with the company by valuing the one-to-one relationship. We aim at doing things differently to create a revolution in the customer service to keep all of us smiling with satisfaction.</h4>
 
 <h4>The Fast Delivery team drives market leadership through its motivated people force, dedicated air and ground capacity, cutting-edge technology, wide range of innovative, vertical specific products and value-added services to deliver unmatched standards of service quality to its customers</h4>
 
 <h4> Our vision is to establish continuing excellence in delivery capabilities focused on the individual customer.</h4>
 </div>

      
    </section>
  );
}