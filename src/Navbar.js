import React from 'react';
import './style.css';
import logo from './image/virus.png';
import Body from './Body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Fahad from './image/Fahad.jpg';

function Navbar() {
  return (
    <Router>
    
    <div>
    <div className="App">
<nav className="navbar navbar-expand-md bg-dark navbar-dark ">
  
  <img src={logo} alt="virus" className="img-thumbnail" width="32px" height="32px"></img>
  <a href="/" className="navbar-brand">Covid-19 Dairy</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
  
      <Link to="/" className="nav-link">Home</Link>
        
    
      </li>
      <li className="nav-item">
    
           <Link className="nav-link" to="/about">About</Link>
     
    
      </li>
      <li className="nav-item">
    
        <Link className="nav-link" to="/contact">Contact</Link>
 
    
      </li>
    </ul>
  </div>
 </nav>
</div>
  
   <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
  
  </div>
  </Router>
    
  );
}

export default Navbar;

function Home() {
  return (
    <div>
      <Body/>
   </div>
  );
}

function About() {
  return (
    <div>
    <br/><br/>
    <div className="card">
     
      <img src={Fahad} alt="Fahad-Ali" style={{width:'100%'}}/>
      <h1>Fahad Ali</h1>
      <p className="title">Founder of Covid-19 dairy</p>
      <p>Hello, I am a web developer..</p>
      <div style={{margin:'24px 0'}}>
        <a className="a" className="fa fa-instagram" href="https://www.instagram.com/mdalifahad/"></a>  
        <a className="a" className="fa fa-linkedin" href="https://www.linkedin.com/in/fahad-ali-111034164"></a>  
        <a className="a" className="fa fa-facebook" href="https://m.facebook.com/i.me.fahad.ali"></a> 
  </div>
  <p><button href="mailto:fahad288ali@gmail.com" className="button">Contact</button></p>

     
    </div>
    </div>
    );
}

function Contact() {
  return (
    <div>
      <h2>Comming soon...</h2>
    </div>
  );
}
