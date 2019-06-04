import React, {Component} from 'react';
import Main from "./views/Main";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Login from './views/Login'
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Route path="/" exact  render={props => {
            return <Login {...props}/>
          }}></Route>

          <Route path="/dashboard" exact  render={props => {
            return <Main {...props}/>
          }}></Route>


        </div>
      </Router>
    
  );} 
}

export default App;
