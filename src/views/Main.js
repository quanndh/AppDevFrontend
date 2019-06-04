import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import HomeBoard from './HomeBoard'


class Main extends Component {

    render() {
        return (
            <BrowserRouter>
                <BaseLayout>
                    <Switch>
                        <Route exact path = "/dashboard" render={props => {
                            return <HomeBoard {...props}/>
                        }}/>
                    </Switch>
                </BaseLayout>
            </BrowserRouter>
            
        );
    }
}

export default Main;
