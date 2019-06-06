import React, { Component } from 'react'
import {Breadcrumb, Col, Row} from 'antd'
import Statistics from '../components/Statistic';
import { Calendar } from 'antd';
import axios from "axios";
import { UserContext } from '../contexts/User';

class HomeBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            statistic: [],

        }
    }

    componentWillMount() {
        let role = localStorage.getItem("role");
        if(role === "admin"){
            axios.get("http://localhost:6969/api/users/role/" + role)
            .then(data => {
                let statistic = [
                    {title: "Staff", value: data.data.staffCount},
                    {title: "Trainer", value: data.data.trainerCount}
                ]
                this.setState({
                    statistics: statistic
                })
            })
            .catch(err => console.log(err))
        } else if(role === "staff"){
            axios.get("http://localhost:6969/api/users/role/" + role)
            .then(data => {
                let statistic = [
                    {title: "Trainer", value: data.data.trainerCount},
                    { title: "Trainee", value: data.data.traineeCount}
                ]
                this.setState({
                    statistics: statistic
                })
            })
            .catch(err => console.log(err))
        } else {
            console.log("a")
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

HomeBoard.contextType = UserContext;
export default HomeBoard;
