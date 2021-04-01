
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Package from "./Components/Package";
import "./styles/header.css"
import "./styles/shared.css"

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Package/>
      <Footer/>
    </div>
  );
}