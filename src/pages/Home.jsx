import { Link } from "react-router-dom";

export default function Home() {
  const imageObject =require("../assets/test1.jpeg");
  const imageURL=imageObject.default;
  const imageObject1 =require("../assets/test.jpeg");
  const imageURL1=imageObject1.default;
  const imageObject2 =require("../assets/test2.jpeg");
  const imageURL2=imageObject2.default;
  const imageObject3 =require("../assets/BEV2.jpeg");
  const imageURL3=imageObject3.default;
  return (
    
    <section className="home">
      <h2>Our solutions connect people and possibilities.</h2>
      <div class="p1">Connecting people with goods, services and ideas creates opportunities and improves lives. 
      We believe that a connected world is a better world, and that belief guides everything we do.</div>
      {/* <Link className="link" to="/packagetrack">
        Click Here to package
      </Link> */}
      
      <div class="Main">
        
 
 <h4 class="Main-item"> Our vision is to establish continuing excellence in delivery capabilities focused on the individual customer.</h4>
 </div>
 <div class="img">
 <img src={imageURL} alt="this is the logo" width="180" height= "150"/>
 <img src={imageURL1} alt="this is the logo" width="180" height= "150"/>
 <img src={imageURL2} alt="this is the logo" width="180" height= "150"/>
 <img src={imageURL3} alt="this is the logo" width="180" height= "150"/>
 </div>  
      
    </section>
  );
}