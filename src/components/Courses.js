import React, { Component } from 'react';
import { Table, Divider, Breadcrumb, Tag } from 'antd';
import {Link} from "react-router-dom";
import axios from "axios";
import _ from "lodash"

const { Column } = Table;


class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:6969/api/courses", {
            withCredentials: true
        })
        .then(data => {
            let courses = data.data.data;
            let courseData = [];
            for(let i = 0; i < courses.length; i++){
                if(courses[i].trainer === null) courses[i].trainer = {name: "Empty"}
                courseData.push({id: courses[i]._id, name: courses[i].name, topic: courses[i].topic, trainer: courses[i].trainer.name, trainee: courses[i].trainee}) 
            }
            console.log(courseData)
            this.setState({
                data: courseData
            })
        })
        .catch(err => console.log(err))
    }

    deleteAcc = (id) => {
        axios.delete("http://localhost:6969/api/courses/" + id, {
            withCredentials: true
        })
        .then((data) => {
            let courses = data.data.data;
            let courseData = [];
            for(let i = 0; i < courses.length; i++){
                if(courses[i].trainer === null) courses[i].trainer = {name: "Empty"}
                courseData.push({id: courses[i]._id, name: courses[i].name, topic: courses[i].topic, trainer: courses[i].trainer.name, trainee: courses[i].trainee}) 
            }
            console.log(courseData)
            this.setState({
                data: courseData
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        const { data } = this.state;
         
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home / Detail</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                    <h1>ACCOUNT MANAGEMENT</h1>
                    <Table pagination={{position: "top", pageSize: "6"}} size="medium"  dataSource={data} style={{height: "60%"}}>
                        <Column title="Name" dataIndex="name" key="name" />

                        <Column title="Topic" dataIndex="topic" key="topic" />

                        <Column title="Trainer" dataIndex="trainer" key="trainer" />

                        <Column title="Trainee" key="trainee" render={(record) => (
                            <span>
                                {   
                                    record.trainee.length !== 0 ? record.trainee.map(item => {
                                        return ( <Tag color={"cyan"}>{item.name}</Tag>)
                                    }) : "Empty"
                                }
                            </span>
                        )}/>

                        <Column
                        title="Action"
                        key="action"
                        render={(record) => (
                            <span>
                                <Tag color="green"><Link to={"course-detail/" + record.id}>View</Link></Tag>
                                <Divider type="vertical" />
                                <Tag color="red"  onClick={() => this.deleteAcc(record.id)}>Delete</Tag>
                            </span>
                        )}
                        />
                    </Table>
                </div>
            </div>
        );
    }
}

export default Detail;
