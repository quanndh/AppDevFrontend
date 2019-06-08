import React, {Component} from 'react';
import Main from "./views/Main";
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
          <div className="App">
            <UserContext.Consumer>
              {
                ({user}) => {
                  if(_.isEmpty(user)){
                    return <Login />
                  } else {
                    return <Main />
                  }
                }
              }
            </UserContext.Consumer>

          </div>
      </UserProvider>
      
    
  );} 
}

export default App;
