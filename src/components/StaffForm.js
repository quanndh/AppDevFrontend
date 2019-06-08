import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

class StaffForm extends Component {
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
                            <form onSubmit={handleSubmit} style={{width: "40%"}}>
                                <label htmlFor="name" style={{ display: 'block' }}>
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
                    
                   
                    );
                }}
            </Formik>
        );
    }
}

export default StaffForm;
