/* eslint-disable import/no-anonymous-default-export */
import Header from "../Components/Header";
import Footer from "../Components/Footer";


import "../styles/header.css"
import "../styles/footer.css"
export default function Home()
{
    return(
        <div className="test">
        <Header/>
        <body class = "home"/>
        <Footer/> 
        </div>
    )
}