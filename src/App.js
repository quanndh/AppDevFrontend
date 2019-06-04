import React, {Component} from 'react';
import Main from "./views/Main";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Login from './views/Login'
import './App.css';
import {UserProvider, UserContext} from './contexts/User';
import _ from "lodash";

class App extends Component {
  render(){
    return (
      <UserProvider>
        <UserContext.Consumer>
        {
          ({getInfo, user}) => { _.isEmpty(user) ? getInfo() : console.log(user.role)}
        }
        </UserContext.Consumer>
          <Router>
          <div className="App">
            <Route path="/" exact  render={props => {
              return <Login {...props}/>
            }}></Route>

            <Route path="/dashboard" exact  render={props => {
              return <Main {...props} />
            }}></Route>

          </div>
        </Router>
      </UserProvider>
      
    
  );} 
}

export default App;
