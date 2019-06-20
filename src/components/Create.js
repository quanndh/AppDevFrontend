import React, { Component } from 'react';
import { Select } from 'antd';
import {Breadcrumb} from 'antd'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { UserContext } from "../contexts/User";

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
   
        const { option } = this.state;

        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home/Create</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                    <h1>CREATE A NEW ACCOUNT</h1>
                <Formik
                onSubmit={(values, { setSubmitting }) => {
                    values['role'] = this.state.option;
                    console.log(values)
                    axios.post("http://localhost:6969/api/users",{
                        name: values.name,
                        role: values.role,
                        password: values.password
                    }, {
                        withCredentials: true
                    })
                    .then(data => console.log(data))
                    .catch(err => console.log(err))
                    
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                    .required('Name is required'),
                    password: Yup.string()
                    .required("Password is required"),
                    role: Yup.string()
                })}
                >
                {props => {
                    const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    } = props;
                    return (
                            <form onSubmit={handleSubmit} style={{width: "40%"}}>
                                <UserContext.Consumer>
                                {
                                    ({user}) => {
                                        if(user.role === "admin"){
                                            return <Select name="role" defaultValue="Role" style={{ width: 120, marginBottom: "20px" }} onChange={this.handleChange}>
                                                        <Option id="role" value="Role" disabled>Role</Option>
                                                        <Option id="role" value="staff">Staff</Option>
                                                        <Option id="role" value="trainer">Trainer</Option>      
                                                    </Select>
                                        } else if(user.role === "staff"){
                                            return <Select name="role" defaultValue="Role" style={{ width: 120, marginBottom: "20px" }} onChange={this.handleChange}>
                                                        <Option id="role" value="Role" disabled>Role</Option>
                                                        <Option id="role" value="trainer">Trainer</Option>
                                                        <Option id="role" value="trainee">Trainee</Option>      
                                                    </Select>
                                        }
                                    }
                                }
                                </UserContext.Consumer>
                                

                                { option === "" && ""}
                                { option === "staff" && <div>
                                <label htmlFor="name" style={{ display: 'block' }}>
                                    Staff name
                                </label>
                                <input
                                id="name"
                                placeholder="Staff name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.name && touched.name ? 'text-input error' : 'text-input'
                                }
                                />
                                {errors.name && touched.name && (
                                    <div className="input-feedback">{errors.name}</div>
                                )}
                                <br/>
                                <label htmlFor="email" style={{ display: 'block' }}>
                                    Password
                                </label>
                                <input
                                id="password"
                                placeholder="Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.password && touched.password ? 'text-input error' : 'text-input'
                                }
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                                <br />
                                <input type="submit" className="btn" value="Create" style={{height: "40px", width: "100px", background: "white", color: "black", transition: "0.3s ease"}}/>
                                </div>}

                                { option === "trainer" && <div>
                                <label htmlFor="name" style={{ display: 'block' }}>
                                    Trainer name
                                </label>
                                <input
                                id="name"
                                placeholder="Trainer name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.name && touched.name ? 'text-input error' : 'text-input'
                                }
                                />
                                {errors.name && touched.name && (
                                    <div className="input-feedback">{errors.name}</div>
                                )}
                                <br/>
                                <label htmlFor="email" style={{ display: 'block' }}>
                                    Password
                                </label>
                                <input
                                id="password"
                                placeholder="Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.password && touched.password ? 'text-input error' : 'text-input'
                                }
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                                <br />
                                <input type="submit" className="btn" value="Create" style={{height: "40px", width: "100px", background: "white", color: "black", transition: "0.3s ease"}}/>
                                </div>}

                                { option === "trainee" && <div>
                                <label htmlFor="name" style={{ display: 'block' }}>
                                    Trainee name
                                </label>
                                <input
                                id="name"
                                placeholder="Trainee name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.name && touched.name ? 'text-input error' : 'text-input'
                                }
                                />
                                {errors.name && touched.name && (
                                    <div className="input-feedback">{errors.name}</div>
                                )}
                                <br/>
                                <label htmlFor="email" style={{ display: 'block' }}>
                                    Password
                                </label>
                                <input
                                id="password"
                                placeholder="Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.password && touched.password ? 'text-input error' : 'text-input'
                                }
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                                <br />
                                <input type="submit" className="btn" value="Create" style={{height: "40px", width: "100px", background: "white", color: "black", transition: "0.3s ease"}}/>
                                </div>}

                            </form>
                    
                   
                    );
                }}
            </Formik>

                  

                </div>
            </div>
        );
    }
}

export default Create;
