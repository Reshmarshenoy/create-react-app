import React, { Component } from 'react';
import logo from './logo.svg';
import LogoImg from './images/home-slider-2.jpg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends React.Component {
 
  constructor(props) {
    super(props)
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.state = { hour: hour, minute: minute, second: second };
  }

  clockTick() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.setState({ hour: hour, minute: minute, second: second });
  }

  componentDidMount() {
    setInterval(this.clockTick.bind(this), 1000);
  }


  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <img src={LogoImg}  alt="logo" height="600" width="600" />
        </p>
        <h2>Timer</h2>
        <div class="panel panel-default">
        <h1>
          {this.state.hour}:
          {this.state.minute}:
          {this.state.second}
        </h1>
        <p>
          <a className="btn btn-sm btn-success" href="/">Back</a>
        </p>
        </div>
      </div>
    );
  }
}

    
export default App;
