import React, { Component } from 'react';
import { Avatar, Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import Statistics from './Statistic';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class BaseLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
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
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }} >
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" ></div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                    <Icon type="home" />
                    <span>Home</span>
                    </Menu.Item>
                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="team" />
                        <span>Staff</span>
                        </span>
                    }
                    >
                    <Menu.Item key="2"><Icon type="usergroup-add" />Create</Menu.Item>
                    <Menu.Item key="3"><Icon type="team"/>Edit</Menu.Item>
                    <Menu.Item key="4"><Icon type="usergroup-delete" />Delete</Menu.Item>
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    title={
                        <span>
                        <Icon type="user" />
                        <span>Trainer</span>
                        </span>
                    }
                    >
                    <Menu.Item key="6"><Icon type="user-add" />Create</Menu.Item>
                    <Menu.Item key="8"><Icon type="user" />Edit</Menu.Item>
                    <Menu.Item key="9"><Icon type="user-delete" />Delete</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>

                <Layout>

                    <Header style={{ background: '#fff', padding: 0, display: "flex", justifyContent: "flex-end", alignItems: "center" }} >
                        <Avatar style={{margin: '0 16px'}} size="large" icon="user" />
                        <Button 
                        ghost 
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
