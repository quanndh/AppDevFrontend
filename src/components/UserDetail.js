import React, { Component } from 'react';
import {Breadcrumb, Icon} from 'antd'
import axios from "axios";
import { Descriptions } from 'antd';


class UserDetail extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
        axios.get("http://localhost:6969/api/users/" + this.props.match.params.userid)
        .then(data => console.log(data.data.data))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
               <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home/Create</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                    <Descriptions title="User Info" column={1} size="default">
                        <Descriptions.Item label="UserName">Zhou Maomao <Icon type="edit" /></Descriptions.Item>
                        <Descriptions.Item label="Telephone">1810000000 <Icon type="edit" /></Descriptions.Item>
                        <Descriptions.Item label="Live">Hangzhou, Zhejiang <Icon type="edit" /></Descriptions.Item>
                        <Descriptions.Item label="Remark">empty <Icon type="edit" /></Descriptions.Item>
                        <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        );
    }
}

export default UserDetail;
