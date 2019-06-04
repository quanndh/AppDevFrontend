import React, { Component } from 'react'
import {Layout, Breadcrumb} from 'antd'
import Statistics from '../components/Statistic';
const {Content} = Layout

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
                 <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                                <Statistics statistic={this.state.statistics}/>
                            </div>
                </Content>
            </div>
        )
    }
}
