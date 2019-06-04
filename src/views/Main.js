import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import HomeBoard from '../components/HomeBoard'
import {UserContext} from "../contexts/User";

class Main extends Component {

    render() {
        return (
            <UserContext.Consumer>
            {
              ({user}) => (
                 
                    <BrowserRouter>
                        <BaseLayout>
                            <Switch>
                                <Route exact path = "/dashboard" render={props => {
                                    return <HomeBoard user={user} {...props}/>
                                }}/>
                            </Switch>
                        </BaseLayout>
                    </BrowserRouter>
                )
            }
             </UserContext.Consumer>
            
        );
    }
}

export default Main;
