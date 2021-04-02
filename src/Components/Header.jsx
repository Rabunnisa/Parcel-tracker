export default function Header() {
    const imageObject =require("../assets/logo.jpg");
    const imageURL=imageObject.default;
        return (
          <article>
          <header>
          <h1 >Welcome to the AHL package services</h1>
          <img class ="image" src={imageURL} alt="this is the logo" width="150" height= "150"/>
          
          </header> </article>
        );
      }