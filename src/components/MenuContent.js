import React, { Component } from 'react';
import { UserContext } from '../contexts/User';
import { Icon } from "antd"
import { Menu } from 'antd'
import { Link } from "react-router-dom"

const { SubMenu } = Menu;;

class MenuContent extends Component {
    render() {
        
        return (
                <UserContext.Consumer>
                    {
                        ({user}) => {
                            if(user.role === "admin"){
                                return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                            <Menu.Item key="1">
                                                
                                                <Link className="link" to={"/dashboard"}><Icon type="home"/>Home</Link>
                                            </Menu.Item>
                                            
                                            <SubMenu
                                            key="sub1"
                                            title={
                                                <span>
                                                    <Icon type="user" />
                                                    <span>Staff</span>
                                                </span>
                                            }
                                            >
                                                <Menu.Item key="2"><Link className="link" to="/add-staff"><Icon type="usergroup-add" />Create</Link></Menu.Item>
                                                <Menu.Item key="3"><Link className="link" to="/detail-staff"><Icon type="team"/>Details</Link></Menu.Item>
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
                                                <Menu.Item key="4"><Link className="link" to="/add-trainer"><Icon type="usergroup-add" />Create</Link></Menu.Item>
                                                <Menu.Item key="5"><Link className="link" to="/detail-trainer"><Icon type="team"/>Details</Link></Menu.Item>
                                            </SubMenu>

                                        </Menu>
                            } else if(user.role === "staff"){
                                return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                            <Menu.Item key="1">
                                                <Link className="link" to={"/dashboard"}><Icon type="home"/>Home</Link>
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
                                                <Menu.Item key="2"><Link className="link" to="/add-trainer"><Icon type="usergroup-add" />Create</Link></Menu.Item>
                                                <Menu.Item key="3"><Link className="link" to="/detail-trainer"><Icon type="team"/>Details</Link></Menu.Item>
                                            </SubMenu>
                    
                                            <SubMenu
                                            key="sub2"
                                            title={
                                                <span>
                                                    <Icon type="user" />
                                                    <span>Trainee</span>
                                                </span>
                                            }
                                            >
                                                <Menu.Item key="4"><Link className="link" to="/add-trainee"><Icon type="usergroup-add" />Create</Link></Menu.Item>
                                                <Menu.Item key="5"><Link className="link" to="/detail-trainee"><Icon type="team"/>Details</Link></Menu.Item>                    
                                            </SubMenu>
                                        </Menu>
                            }
                        }
                    }
                </UserContext.Consumer>        
        );
    }
}

Menu.contextType = UserContext;
export default MenuContent;
