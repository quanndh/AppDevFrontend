import React, { Component } from 'react'
import {Breadcrumb, Col, Row, Card} from 'antd'
import Statistics from '../components/Statistic';
import { Calendar } from 'antd';
import axios from "axios";
import { UserContext } from '../contexts/User';
import {Link} from "react-router-dom";

const { Meta } = Card;

class HomeBoard extends Component {
    constructor(props){
        super(props);
        this.state={
            statistic: [],
            role: "",
            courses: []
        }
    }

    componentWillMount() {
        let role = localStorage.getItem("role");
        this.setState({role})
        if(role === "admin"){
            axios.get("http://localhost:6969/api/users/role/" + role, {
                withCredentials: true
            })
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
            axios.get("http://localhost:6969/api/users/role/" + role, {
                withCredentials: true
            })
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
        } else if(role === "trainer"){
            axios.get("http://localhost:6969/api/courses/trainer/" + this.props.user._id, {
                withCredentials: true
            })
            .then(data => {
                this.setState({courses: data.data.data})
            })
        } else {
            console.log("a")
        }
       
    }

    render() {
        const { role, courses } = this.state
        const displayCourses = courses ? courses.map(course => (
            <Col span={8}>
                <Link to={"/course-detail/" + course._id}>
                    <Card className="statistic" style={{ width: 300, marginTop: 16 }} >
                        <Meta
                            title={course.name}
                            description={course.topic}
                        />
                    </Card>
                </Link>
                
            </Col>
        )) : "No course yet!!"
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                    
                    {
                        role !== "trainer" && <Row gutter={16}>
                                                <Col span={18}>
                                                    <Calendar  style={{width: "100%"}}/>
                                                </Col> 
                                                
                                                <Statistics statistic={this.state.statistics}/>
                                            </Row>
                    }
                    {
                        role === "trainer" && <Row gutter={16}>
                                               {displayCourses} 
                                            </Row>
                    }
                </div>
            </div>
        )
    }
}

HomeBoard.contextType = UserContext;
export default HomeBoard;
