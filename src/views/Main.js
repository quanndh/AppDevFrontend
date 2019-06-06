import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import HomeBoard from '../components/HomeBoard'
import {UserContext} from "../contexts/User";
import StaffForm from '../components/StaffForm';

class Main extends Component {

    render() {
        return (
            <UserContext.Consumer>
            {
              ({user}) => (
                 
                    <BrowserRouter>
                        <BaseLayout user={user}>
                            <Switch>

                                <Route exact path = "/dashboard" render={props => {
                                    return <HomeBoard user={user}  {...props}/>
                                }}/>

                                <Route exact path="/add-staff" render={props => {
                                    return <StaffForm {...props} />
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
