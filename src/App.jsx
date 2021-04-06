/* eslint-disable react-hooks/exhaustive-deps */
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Package from "./pages/Package"
import "./styles/styles.css"
export default function App() {


  
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/packagetrack" exact component={Package} />
            
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }








