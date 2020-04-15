import React, {Component} from 'react';

import {loginUserAction, registerUserAction} from '../actions/authenticationActions';
import icon1 from '../assets/img/icon-1-li.png';
import icon2 from '../assets/img/icon-2-li.png'
import icon3 from '../assets/img/icon-3-li.png'
import google_icon from '../assets/img/google-icon.png';
import video from '../assets/r1ObefKq_close chat issue 4 (1).mp4';
import {connect} from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class LoginPage extends Component {
    onHandleLogin = (event) => {
        event.preventDefault();

        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            email, password
        };
        this.props.dispatch(loginUserAction(data));
    }

    onHandleRegistration = (event) => {
        event.preventDefault();

        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            name, email, password
        };

        this.props.dispatch(registerUserAction(data));
    }

    componentDidMount() {
        document.title = 'RayEye Home';
    }

    render() {
        return (
            <React.Fragment>
                <section className="banner" id='banner'>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-sm-12 col-md-6 col-xs-12">
                                <div className="d-flex flex-column h-100">
                                    <div className="text-container">
                                        <h1>"One Liner"</h1>
                                    </div>
                                    <div className="row icon-count">
                                        <div
                                            className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-xs-4 d-flex flex-column align-items-center">
                                            <img alt='nothing' src={icon1}/>
                                            <h1>415</h1>
                                            <strong className="text-center">Doctors Reached</strong>
                                        </div>
                                        <div
                                            className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-xs-4 d-flex flex-column align-items-center">
                                            <img alt='nothing' src={icon2}/>
                                            <h1>415</h1>
                                            <strong className="text-center">Hospitals Reached</strong>
                                        </div>
                                        <div
                                            className="col-xl-4 col-lg-4 col-sm-4 col-md-4 col-xs-4 d-flex flex-column align-items-center">
                                            <img alt='nothing' src={icon3}/>
                                            <h1>12K</h1>
                                            <strong className="text-center">Test conducted</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-6 col-xs-12">
                                <div className="card mt-5">
                                    <div className="card-body">
                                        <p className="title">Start by logging into your account</p>


                                        <div className="">
                                            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                                                <Tab eventKey="login" title="Login">
                                                    <form onSubmit={this.onHandleLogin}>
                                                        <div className="input-label-up mt-4">
                                                            <label htmlFor='email'>e-mail</label>
                                                            <input className="form-control" type="text" name='email'
                                                                   id='email'/>
                                                        </div>

                                                        <div className="input-label-up">
                                                            <label htmlFor='password'>Password</label>
                                                            <input className="form-control" type="password"
                                                                   name='password' id='password'/>
                                                        </div>

                                                        <div className="d-flex justify-content-center mt-2">
                                                            <button className="btn btn-primary" type='submit' style={{
                                                                paddingRight: '50px',
                                                                paddingLeft: '50px'
                                                            }}>
                                                                Login
                                                            </button>
                                                        </div>

                                                        <div className="card-footer-banner">
                                                            <a href="#noid">Forgot Your Password?</a>
                                                            <button className="btn btn-outline-primary mt-3"
                                                                    type='button'>
                                                                <img alt='nothing' className="icon-img-btn" src={google_icon}/>Login
                                                                With Google
                                                            </button>
                                                        </div>
                                                    </form>
                                                </Tab>
                                                <Tab eventKey="signup" title="Signup">
                                                    <form onSubmit={this.onHandleRegistration}>
                                                        <div className="input-label-up mt-4">
                                                            <label htmlFor='name'>UserName</label>
                                                            <input className="form-control" type="text" name='name'
                                                                   id='name'/>
                                                        </div>
                                                        <div className="input-label-up mt-4">
                                                            <label id='SignUpEmail'>e-mail</label>
                                                            <input className="form-control" type="text" name='email'
                                                                   id='SignUpEmail'/>
                                                        </div>

                                                        <div className="input-label-up">
                                                            <label htmlFor='SignUpPassword'>Password</label>
                                                            <input className="form-control" type="password"
                                                                   name='password' id='SignUpPassword'/>
                                                        </div>

                                                        <div className="d-flex justify-content-center mt-2">
                                                            <button className="btn btn-primary" type='submit' style={{
                                                                paddingRight: '50px',
                                                                paddingLeft: '50px'
                                                            }}>
                                                                Signup
                                                            </button>
                                                        </div>

                                                        <div className="card-footer-banner">
                                                            <a href="#noid">Forgot Your Password?</a>
                                                            <button className="btn btn-outline-primary mt-3"
                                                                    type='button'>
                                                                <img alt='nothing' className="icon-img-btn" src={google_icon}/>Signup
                                                                With Google
                                                            </button>
                                                        </div>
                                                    </form>
                                                </Tab>
                                            </Tabs>
                                            {/*<div className="tab-content">*/}
                                            {/*    <div id="login" className="tab-pane active">*/}
                                            {/*        <form onSubmit={this.onHandleLogin}>*/}
                                            {/*            <div className="input-label-up mt-4">*/}
                                            {/*                <label>UserName</label>*/}
                                            {/*                <input className="form-control" type="text" name='email' id='email'/>*/}
                                            {/*            </div>*/}

                                            {/*            <div className="input-label-up">*/}
                                            {/*                <label>Password</label>*/}
                                            {/*                <input className="form-control" type="password" name='password' id='password'/>*/}
                                            {/*            </div>*/}

                                            {/*            <div className="d-flex justify-content-center mt-2">*/}
                                            {/*                <button className="btn btn-primary" type='submit' style={{*/}
                                            {/*                    paddingRight: '50px',*/}
                                            {/*                    paddingLeft: '50px'*/}
                                            {/*                }}>*/}
                                            {/*                    Login*/}
                                            {/*                </button>*/}
                                            {/*            </div>*/}

                                            {/*            <div className="card-footer-banner">*/}
                                            {/*                <a href="#">Forgot Your Password?</a>*/}
                                            {/*                <button className="btn btn-outline-primary mt-3"*/}
                                            {/*                        type='button'>*/}
                                            {/*                    <img alt='nothing className="icon-img-btn" src={google_icon}/>Login*/}
                                            {/*                    With Google*/}
                                            {/*                </button>*/}
                                            {/*            </div>*/}
                                            {/*        </form>*/}
                                            {/*    </div>*/}
                                            {/*    <div id="signUp" className=" tab-pane fade">*/}


                                            {/*    </div>*/}

                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="banner" id="How-it-Works">
                    <div className="container">
                        <h1 className="text-center mt-5">How it Works?</h1>

                        <div className="text-center mt-4">
                            <strong className="small-line">
                                Read Our Research
                            </strong>
                        </div>

                        <div className="row mt-5 justify-content-center">
                            <div className="col-xl-7 col-md-7 col-lg-7 col-sm-12 col-xs-12">
                                <video width="100%" height="" controls>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>

                            <div
                                className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 d-flex flex-column align-items-center mt-5">
                                <button className="btn btn-primary">
                                    Request A Demo
                                </button>
                                <button className="btn btn-primary mt-4">
                                    <i className="fa fa-github" style={{
                                        fontSize: '24px',
                                        marginRight: '10px'
                                    }}></i>View on GitHub
                                </button>

                            </div>
                        </div>
                    </div>

                </section>


                <section id="AboutUs" className="banner">
                    <div className="container">
                        <h1 className="mt-5 text-center">
                            About Us
                        </h1>
                        <div className="row mt-5 justify-content-center">
                            <div className="col-xl-7 col-md-7 col-lg-7 col-sm-12 col-xs-12">
                                <p className="text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                            </div>


                        </div>

                    </div>
                </section>


                <section id="contactUs" className="banner">
                    <h1 className="mt-5 text-center"> Contact Us</h1>
                    <div className="container mt-5">
                        <div className="row justify-content-around contact">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex">
                                <i className="fa fa-phone"></i>
                                <div>
                                    <p style={{
                                        margin: '0'
                                    }
                                    }>14587544555</p>
                                    <p>14587544555</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-flex">
                                <i className="fa fa-map-marker"></i>
                                <p style={{
                                    width: '70%'
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore
                                    et dolore magna aliqua. Ut
                                </p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 ">
                                <div className="input-label-up mt-4">
                                    <label>FullName</label>
                                    <input className="form-control" type="text"/>
                                </div>

                                <div className="input-label-up">
                                    <label>E-mail</label>
                                    <input className="form-control" type="text"/>
                                </div>

                                <div className="input-label-up">
                                    <label>Message</label>
                                    <textarea className="form-control" type="text"> </textarea>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary" style={{
                                        padding: '5px 50px'
                                    }}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);
