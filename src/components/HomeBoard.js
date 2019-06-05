import React, { Component } from 'react'
import {Breadcrumb} from 'antd'
import Statistics from '../components/Statistic';


export default class HomeBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            statistics: [
                {
                    title: "Trainer",
                    value: 20
                },
                {
                    title: "Trainee",
                    value: 21
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                    <Statistics statistic={this.state.statistics}/>
                </div>
            </div>
        )
    }
}
