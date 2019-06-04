import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



class BaseLayout extends Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    
      render() {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo"></div>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                  <Icon type="home" />
                  <span>Dashboard</span>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>Trainer</span>
                    </span>
                  }
                >
                  <Menu.Item key="3"><Icon type="user-add" />Create</Menu.Item>
                  <Menu.Item key="4"><Icon type="user" />Edit</Menu.Item>
                  <Menu.Item key="5"><Icon type="user-delete" />Delete</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="team" />
                      <span>Staff</span>
                    </span>
                  }
                >
                  <Menu.Item key="6"><Icon type="user-add" />Create</Menu.Item>
                  <Menu.Item key="8"><Icon type="user" />Edit</Menu.Item>
                  <Menu.Item key="8"><Icon type="user-delete" />Delete</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'flex-end' }}>
            </Header>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by FPT Team</Footer>
            </Layout>
          </Layout>
        );
      }
}

export default BaseLayout;
