import React, { Component } from 'react';
import {Breadcrumb, Icon} from 'antd'
import axios from "axios";
import { Descriptions } from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';

const { Option } = Select;


class UserDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: [false, false, false],
            id: "",
            name: "",
            role: "",
            course: []
        }
    }

    componentDidMount() { 
        axios.get("http://localhost:6969/api/users/" + this.props.match.params.userid, {
            withCredentials: true
        })
        .then(data => {
            console.log(data)
            this.setState({
                id: data.data.data._id,
                name: data.data.data.name,
                role: data.data.data.role,
                course: data.data.data.course
            })
        })
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

    commitUpdate = (index) => {
        axios.put("http://localhost:6969/api/users/" + this.state.id, {
            name: this.state.name,
            role: this.state.role,
            course: this.state.course
        }, {withCredentials: true})
        .then(() => this.toggleUpdate(index))
        .catch(err => console.log(err))
    }

    changeRole = (value) => {
        console.log(value);
        this.setState({
            role: value
        })
    }

    render() {
        const { id, name, role, course, status } = this.state;
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
                            <h4>Role</h4>
                            <h4>Course</h4>
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
                                status[1] === false ? <h4>{role} <Icon type="edit" onClick={()=>this.toggleUpdate(1)}/></h4> : (
                                    <div>
                                        <Select defaultValue={role} style={{ width: 120 }} onChange={this.changeRole}>
                                            <Option value="trainer">Trainer</Option>
                                            <Option value="staff">Staff</Option>
                                        </Select> 
                                        <Icon type="check" onClick={()=>this.commitUpdate(1)}/> 
                                        <Icon type="close" onClick={() => this.toggleUpdate(1)}/>
                                    </div>
                                )
                            }

                            
                            {
                                status[2] === false ? <h4>{course} <Icon type="edit" onClick={()=>this.toggleUpdate(2)}/></h4> : (
                                    <div>
                                        <input value={course}/> <Icon type="check" /> <Icon type="close" onClick={() => this.toggleUpdate(2)}/>
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

export default UserDetail;
