import React, { Component } from 'react';
import {Breadcrumb, Icon} from 'antd'
import axios from "axios";
import { Descriptions } from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';

const { Option } = Select;

class CourseDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: [false, false, false],
            id: "",
            name: "",
            role: "",
            course: [],
            trainers: [],
            trainee: [],
            trainer: "",
           
        }
    }

    componentDidMount() { 
        axios.get("http://localhost:6969/api/courses/" + this.props.match.params.courseid, {
            withCredentials: true
        })
        .then(data => {
            if(data.data.data.trainer === null) data.data.data.trainer = {name: "Empty"}
            this.setState({
                id: data.data.data._id,
                name: data.data.data.name,
                topic: data.data.data.topic,
                trainer: data.data.data.trainer,
                trainee: data.data.data.trainee
            })
        })
        .catch(err => console.log(err))

        axios.get("http://localhost:6969/api/users/select/trainer", {
            withCredentials: true
        })
        .then(data => this.setState({trainers: data.data.data}))
        .catch(err => console.log(err))
    }

    toggleUpdate = (index) => {
        let newStt = {...this.state.status};
        newStt[index] = !newStt[index];
        this.setState({
            status: newStt
        })
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changeTopic = (value) => {
        this.setState({topic: value})
    }

    changeTrainer = (value) => {
        this.setState({trainer: value})
    }

    commitUpdate = (index) => {
        axios.put("http://localhost:6969/api/courses/" + this.state.id, {
                name: this.state.name,
                topic: this.state.topic,
                trainer: this.state.trainer,
                trainee: this.state.trainee
        }, {withCredentials: true})
        .then((data) => {
            this.toggleUpdate(index)
        })
        .catch(err => console.log(err))
        
        axios.get("http://localhost:6969/api/users/" + this.state.trainer, {
            withCredentials: true
        })
        .then(data => this.setState({trainer: data.data.data}))
        .catch(err => console.log(err))
    }

    render() {
        const { id, name, topic, trainers, trainer, trainee, status } = this.state;

        const selectTrainer = trainers ? trainers.map(trainer => (
            <Option id="role" key={trainer._id} value={trainer._id}>{trainer.name}</Option>
        )) : ""

        return (
            <div>
               <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home / User Details</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                    <Row>
                        <Col span={3}>
                            <h4>Id:</h4>
                            <h4>Name:</h4>
                            <h4>Topic</h4>
                            <h4>Trainer</h4>
                        </Col>
                        <Col span={10}>
                            <h4>{id}</h4>

                            {
                                status[0] === false ? <h4>{name} <Icon type="edit" onClick={() => this.toggleUpdate(0)}/></h4> : (
                                    <div>
                                        <input value={name} onChange={(e)=>this.changeName(e)}/><Icon type="check" onClick={()=>this.commitUpdate(0)}/> <Icon type="close" onClick={() => this.toggleUpdate(0)}/>
                                    </div>
                                )
                            }

                            {
                                status[1] === false ? <h4>{topic} <Icon type="edit" onClick={()=>this.toggleUpdate(1)}/></h4> : (
                                    <div>
                                        <Select defaultValue={topic} style={{ width: 200 }} onChange={this.changeTopic}>
                                            <Option id="topic" value="Topic" disabled>Topic</Option>
                                            <Option id="topic" value="AI">AI</Option>
                                            <Option id="topic" value="Machine Learning">Machine learning</Option>     
                                            <Option id="topic" value="JavaScript">JavaScript</Option>
                                            <Option id="topic" value="React">React</Option>  
                                        </Select> 
                                        <Icon type="check" onClick={()=>this.commitUpdate(1)}/> 
                                        <Icon type="close" onClick={() => this.toggleUpdate(1)}/>
                                    </div>
                                )
                            }

                            
                            {
                                status[2] === false ? <h4>{trainer.name} <Icon type="edit" onClick={()=>this.toggleUpdate(2)}/></h4> : (
                                    <div>
                                        <Select name="trainer" defaultValue={trainer.name} style={{ width: 200, marginBottom: "20px" }} onChange={this.changeTrainer}>
                                            <Option id="trainer" value="Trainer" disabled>Trainer</Option>
                                            {selectTrainer}
                                        </Select>
                                        <Icon type="check" onClick={()=>this.commitUpdate(2)}/> 
                                        <Icon type="close" onClick={() => this.toggleUpdate(2)}/>
                                    </div>
                                    
                                )
                            }
                           
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default CourseDetail;
