import React, { Component } from 'react';
import { UserContext } from '../contexts/User';
import { Icon } from "antd"
import { Menu } from 'antd'
import { Link } from "react-router-dom"

const { SubMenu } = Menu;;

class MenuContent extends Component {
    render() {
        const { collapsed } = this.props;
        return (
                <UserContext.Consumer>
                    {
                        ({user}) => {
                            if(user.role === "admin"){
                                return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                            <Menu.Item key="1">
                                                {collapsed !== true && <Link className="link" to={"/dashboard"}><Icon type="home"/>Home</Link>}
                                                {collapsed === true && <Link className="link" to={"/dashboard"}><Icon type="home"/></Link>}
                                            </Menu.Item>
                                            
                                            <Menu.Item key="2">
                                                {collapsed !== true && <Link className="link" to={"/create"}><Icon type="usergroup-add"/>Create</Link>}
                                                {collapsed === true && <Link className="link" to={"/create"}><Icon type="usergroup-add"/></Link>}
                                            </Menu.Item>
                                            <Menu.Item key="3">
                                                {collapsed !== true && <Link className="link" to={"/detail"}><Icon type="read" />Details</Link>}
                                                {collapsed === true && <Link className="link" to={"/detail"}><Icon type="read" /></Link>}
                                            </Menu.Item>

                                        </Menu>
                            } else if(user.role === "staff"){
                                return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                            <Menu.Item key="1">
                                                {collapsed !== true && <Link className="link" to={"/dashboard"}><Icon type="home"/>Home</Link>}
                                                {collapsed === true && <Link className="link" to={"/dashboard"}><Icon type="home"/></Link>}
                                            </Menu.Item>
                                            
                                            <SubMenu
                                            key="sub1"
                                            title={
                                                <span>
                                                    <Icon type="user" />
                                                    <span>Create</span>
                                                </span>
                                            }
                                            >
                                                <Menu.Item key="2"><Link className="link" to="/create"><Icon type="usergroup-add" />Account</Link></Menu.Item>
                                                <Menu.Item key="3"><Link className="link" to="/add-course"><Icon type="schedule" />Course</Link></Menu.Item>
                                            </SubMenu>
                    
                                            <SubMenu
                                            key="sub2"
                                            title={
                                                <span>
                                                    <Icon type="read" />
                                                    <span>Detail</span>
                                                </span>
                                            }
                                            >
                                                <Menu.Item key="4"><Link className="link" to="/detail"><Icon type="user" />Account</Link></Menu.Item>
                                                <Menu.Item key="5"><Link className="link" to="/course-detail"><Icon type="table"/>Course</Link></Menu.Item>                    
                                            </SubMenu>
                                        </Menu>
                            } else if(user.role === "trainer"){
                                return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                            <Menu.Item key="1">
                                                {collapsed !== true && <Link className="link" to="/dashboard"><Icon type="home"/>Home</Link>}
                                                {collapsed === true && <Link className="link" to="/dashboard"><Icon type="home"/></Link>}
                                            </Menu.Item>
                                                                      
                                            <Menu.Item key="2">
                                                {collapsed !== true && <Link className="link" to="/profile-trainer"><Icon type="user" />My Profile</Link>}
                                                {collapsed === true && <Link className="link" to="/profile-trainer"><Icon type="user"/></Link>}  
                                            </Menu.Item>

                                            <Menu.Item key="3">
                                                {collapsed !== true && <Link className="link" to="/course-trainer"><Icon type="team"/>My Courses</Link>}
                                                {collapsed === true && <Link className="link" to="/course-trainer"><Icon type="team"/></Link>}
                                            </Menu.Item>
                    
                                          
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
