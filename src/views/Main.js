import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import HomeBoard from '../components/HomeBoard'
import {UserContext} from "../contexts/User";
import Create from '../components/Create';
import Detail from '../components/Detail';


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

                                <Route exact path="/create" render={props => {
                                    return <Create user={user} {...props} />
                                }}/>
                                <Route exact path="/detail" render={props => {
                                    return <Detail user={user} {...props} />
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
