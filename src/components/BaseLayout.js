import React, { Component } from 'react';
import { Avatar, Layout, Menu, Button } from 'antd';
import axios from "axios";
import MenuContent from './MenuContent';

const { Header, Content, Footer, Sider } = Layout;


class BaseLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,

        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    logOut = () => {
        axios.delete("http://localhost:6969/api/auth", {
            withCredentials: true
        })
        .then(res => {
            window.location.href = "http://localhost:3000";
            localStorage.removeItem("role")
        })
        .catch(err => console.log(err))
    }

    render() {
        const { user } = this.props;
        const { collapsed } = this.state
        return (
            <Layout style={{ minHeight: '100vh' }} >

                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>

                    <div className="logo" ></div>

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <MenuContent collapsed={collapsed}/>
                    </Menu>

                </Sider>

                <Layout>

                    <Header style={{ background: '#fff', padding: 0, display: "flex", justifyContent: "flex-end", alignItems: "center" }} >
                        <Avatar style={{margin: '0 16px'}} size="large" icon="user" />
                        <span style={{paddingRight: "20px"}}>{user.name}</span>
                        <Button 
                        ghost 
                        onClick={this.logOut}   
                        className="btn" 
                        type="primary" 
                        style={{marginRight: "14px", height: "40px", width: "100px"}}>
                            Log out
                        </Button>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        {this.props.children}
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

                </Layout>
            </Layout>
        );
    }
}

export default BaseLayout;
