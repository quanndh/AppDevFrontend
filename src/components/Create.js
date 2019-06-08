import React, { Component } from 'react';
import { Select } from 'antd';
import {Breadcrumb} from 'antd'
import StaffForm from './StaffForm';

const { Option } = Select;


class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            option: ""
        }
    }

    handleChange = (value) => {
        this.setState({option: value})
    }

    render() {
   
        const { user } = this.props;
        const { option } =this.state;

        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home/Create</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                    <h1>CREATE A NEW ACCOUNT</h1>
                    <Select defaultValue="Role" style={{ width: 120, marginBottom: "20px" }} onChange={this.handleChange}>
                        <Option value="Role" disabled>Role</Option>
                        <Option value="staff">Staff</Option>
                        <Option value="trainer">Trainer</Option>
                        
                    </Select>

                    { option === "Role" && ""}
                    { option === "staff" && <StaffForm />}
                    { option === "trainer" && "trainer"}


                </div>
            </div>
        );
    }
}

export default Create;
