import React, { Component } from 'react'
import {Breadcrumb, Col, Row} from 'antd'
import Statistics from '../components/Statistic';
import { Calendar } from 'antd';

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
                    <Row gutter={16}>
                        <Col span={18}>
                            <Calendar  style={{width: "100%"}}/>
                        </Col> 
                        
                        <Statistics statistic={this.state.statistics}/>
                    </Row>
                    
                </div>
            </div>
        )
    }
}
