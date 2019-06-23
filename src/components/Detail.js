import React, { Component } from 'react';
import { Table, Divider, Breadcrumb, Tag } from 'antd';
import {Link} from "react-router-dom";
import axios from "axios";

const { Column } = Table;


class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:6969/api/users/role/" + this.props.user.role, {
            withCredentials: true
        })
        .then(data => {
            let user = data.data.user
            let userData = [];
            for(let i = 0; i < user.length; i++){
                userData[i] = {id: user[i]._id, name: user[i].name, role: user[i].role}
            }
            this.setState({
                data: userData
            })
        })
        .catch(err => console.log(err))
    }

    deleteAcc = (id) => {
        axios.delete("http://localhost:6969/api/users/" + id +"/"+this.props.user.role, {
            withCredentials: true
        })
        .then((data) => {
            let user = data.data.data
            let userData = [];
            for(let i = 0; i < user.length; i++){
                userData[i] = {id: user[i]._id, name: user[i].name, role: user[i].role}
            }
            console.log(userData)
            this.setState({
                data: userData
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home / Detail Account</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                    <h1>ACCOUNT MANAGEMENT</h1>
                    <Table pagination={{position: "top", pageSize: "6"}} size="medium"  dataSource={data} style={{height: "60%"}}>
                        <Column title="Name" dataIndex="name" key="name" />

                        <Column title="Role" dataIndex="role" key="role" />

                        <Column
                        title="Action"
                        key="action"
                        render={(record) => (
                            <span>
                                <Tag color="green"><Link to={"detail/" + record.id}>View</Link></Tag>
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
