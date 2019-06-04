import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {Card, Button} from "antd";
import axios from "axios";

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
                    console.log("c");
                    axios.post("http://localhost:6969/api/auth", {
                        name: values.name,
                        password: values.password
                    }, {
                        withCredentials: true
                    })
                    .then(res => {
                        console.log("A")
                        window.location.href = "http://localhost:3000/dashboard"
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
                    <div  className="bg-login" style={{width: "100%", height: "100vh", display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#ececec"}}> 

                        <Card  style={{width: "35%"}}>
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
                    </div>
                    );
                }}
        </Formik>

        );
    }
}

export default Login;
