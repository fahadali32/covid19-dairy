import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//import $ from 'jquery';
//import Footer from './Footer';
import './style.css'
//import logo from './image/new.png';
import Navbar from './Navbar.js';

class Car extends React.Component {
  render() {
    return <div>
   <Navbar/>
    </div>;
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));
