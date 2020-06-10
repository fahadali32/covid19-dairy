import React from 'react';
import './style.css';
import Virus from './image/virus.png'
class Loading extends React.Component{
  render(){
    return (<div>
    <div className="loading">
    <img src={Virus} className="loading-model" alt="Virus"/>
    <br/><br/><br/><h1>Loading...</h1>
    </div>
    </div>);
  }
}

export default Loading;