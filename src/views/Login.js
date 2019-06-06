import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {Card} from "antd";
import axios from "axios";
import ParticleComponent from '../components/ParticleComponent';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
         
            <Formik
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:6969/api/auth", {
                        name: values.name,
                        password: values.password
                    }, {
                        withCredentials: true
                    })
                    .then(data => {
                        window.location.href = "http://localhost:3000/dashboard";
                        localStorage.setItem("role", data.data.role)
                    })
                    .catch((err) => {this.setState({
                            message: "Wrong name or password",
                        })
                        console.log(err)
                    })
                    console.log("ye")
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                    .required('Name is required'),
                    password: Yup.string()
                    .required("Password is required")
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
                        
                    <div style={{width: "100%", height: "100%", margin: "10% 0", display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#ececec"}}> 
                        <Card  style={{width: "35%", zIndex: "1"}}>
                            <h1>GREENWICH TRAINING SYSTEM</h1>
                            <form onSubmit={handleSubmit} >
                                <label htmlFor="email" style={{ display: 'block' }}>
                                    Name
                                </label>
                                <input
                                id="name"
                                placeholder="Enter your name"
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
                                <input type="submit" className="btn" value="Login" style={{height: "40px", width: "100px", background: "white", color: "black", transition: "0.3s ease"}}/>

                            </form>
                        </Card>
                        <ParticleComponent />
                    </div>
                   
                    );
                }}
        </Formik>
        );
    }
}

export default Login;
