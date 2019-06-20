import React, { Component } from 'react';
import { Select } from 'antd';
import {Breadcrumb} from 'antd'
import { Formik } from 'formik';
import axios from "axios";
import * as Yup from "yup";

const { Option } = Select;


class CreateCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            option: "",
            trainers: [],
            trainer: ""
        }
    }

    componentDidMount(){
        axios.get("http://localhost:6969/api/users/select/trainer", {
            withCredentials: true
        })
        .then(data => this.setState({trainers: data.data.data}))
        .catch(err => console.log(err))
    }

    changeTopic = (value) => {
        this.setState({option: value})
    }

    changeTrainer = (value) => {
        this.setState({trainer: value})
    }

    render() {
        const { option, trainers, trainer } =this.state;
        console.log(option, trainer)
        const selectTrainer = trainers ? trainers.map(trainer => (
        <Option id="role" key={trainer._id} value={trainer._id}>{trainer.name}</Option>
        )) : ""

        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home / Create / Course</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: '600px' }}>
                    <h1>CREATE A NEW COURSE</h1>
                    <Formik
                    onSubmit={(values, { setSubmitting }) => {
                    values['topic'] = this.state.option;
                    values['trainer'] = this.state.trainer
                    console.log(values)
                    axios.post("http://localhost:6969/api/courses",{
                        name: values.name,
                        topic: values.topic,
                        trainer: values.trainer
                    }, {
                        withCredentials: true
                    })
                    .then(data => console.log(data))
                    .catch(err => console.log(err))
                    
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                    .required('Name is required'),
                   
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
                                <div>
                                    <label htmlFor="course" style={{ display: 'block' }}>
                                        Course name
                                    </label>
                                    <input
                                    id="name"
                                    placeholder="Enter course name"
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

                                    <Select name="topic" defaultValue="Pick a topic" style={{ width: 200, marginBottom: "20px" }} onChange={this.changeTopic}>
                                        <Option id="topic" value="Topic" disabled>Topic</Option>
                                        <Option id="topic" value="AI">AI</Option>
                                        <Option id="topic" value="Machine Learning">Machine learning</Option>     
                                        <Option id="topic" value="JavaScript">JavaScript</Option>
                                        <Option id="topic" value="React">React</Option>      
    
                                    </Select>
                                    <br/>

                                    <Select name="trainer" defaultValue="Pick a trainer" style={{ width: 200, marginBottom: "20px" }} onChange={this.changeTrainer}>
                                        <Option id="role" value="Role" disabled>Trainer</Option>
                                        {selectTrainer}
                                    </Select>
                                    
                                    
                                    <br />
                                    <input type="submit" className="btn" value="Create" style={{height: "40px", width: "100px", background: "white", color: "black", transition: "0.3s ease"}}/>
                                </div>
                            </form>
                    
                   
                    );
                }}
                </Formik>

                  

                </div>
            </div>
        );
    }
}

export default CreateCourse;
