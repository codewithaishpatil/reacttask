import React, { useState, useEffect } from "react";
import "./signup.css"
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios"


const Signup = () => {


    const navigate = useNavigate();
    const [emailValid, setEmailValid] = useState(false);
    const [signUpState, setSignUpState] = useState({
       
        email: "",
        password: "",
       
    })

    const handleSignUpForm = (e) => {
        let value;
        value = e.target.value
        setSignUpState({
            ...signUpState,
            [e.target.name]: value
        })
        if (e.target.type === "email") {
            checkEmailValue(value)
        }


    }

    const handleSignUp = (e) => {
        e.preventDefault()

        axios({
            method: 'post',
            url: "https://reqres.in/api/register",
            data: {
                
                email: signUpState.email,
                password: signUpState.password,
            }
        }).then((res) => {
            console.log("action")
            toast("user signedUp successfully")
            navigate('/login')
            console.log("user signedup")
        }).catch((err) => {
            console.log("please check with credetials", err)
        })

    }

    const checkEmailValue = value => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!reg.test(value)) {
            setEmailValid(false);

        } else {
            setEmailValid(true);

        }
    };

    return (
        <>
            <form >
                <nav className="navbar navbar-light bg-white">
                    <div className="container ">
                        <a className="navbar-brand my-3" >
                        </a>

                    </div>
                </nav>

                <section>
                    <div className="container ">
                        <div className="row  d-flex justify-content-center align-item-center">
                            
                            <div className="col-md-6 py-5">
                                <div className="button-box">
                                    <Link to="/login">   <a type="button" className="login toggle-btn" style={{ textDecoration: "none" }}>Login</a></Link>
                                    <button type="button" className="signup toggle-btn" style={{ textDecoration: "none" }}>Sign Up</button>

                                </div>
                                <div className="signup-card">


                                    <h2 className="px-5 mt-5" >Create An Account</h2>
                                    <h4 className="px-5 mb-5" >Please Fill in the form to create account</h4>

                                    {/* -- Full Name  input -- */}
                                    <div className="row px-5 ">
                                        <div className="col-md-6 form mb-3 ">
                                            <span className="svg"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            </span>
                                            <input type="text" className="form-control " placeholder="First Name" name="firstname"
                                                id="firstname" value={signUpState.firstname}
                                                onChange={handleSignUpForm} />
                                        </div>
                                        
                                        <div className="col-md-6 form mb-3 ">
                                            <span className="svg"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            </span>
                                            <input type="text" className="form-control " placeholder="Last Name" name="lastname"
                                                id="lastname" value={signUpState.lastname}
                                                onChange={handleSignUpForm} />
                                        </div>
                                    </div>



                                    {/* -- Email input -- */}
                                    <div className="form px-5 mb-3">
                                        <span className="svg"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22 6L12 13L2 6" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        </span>
                                        <input type="email" className="form-control " placeholder="Email" name="email"
                                            id="email" value={signUpState.email}
                                            onChange={handleSignUpForm} />
                                    </div>

                                    {/* -- Password input -- */}
                                    <div className="form px-5 mb-2">
                                        <span className="svg"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>
                                        <input type="password" className="form-control" placeholder="Your Password" name="password"
                                            id="password" value={signUpState.password}
                                            onChange={handleSignUpForm} />

                                    </div>


                                    {/* -- submit button -- */}

                                    <div className="row px-5 mb-5">
                                        <div className=" mt-3 ">
                                            <button className="sign-btn  btn-lg" onClick={handleSignUp}
                                                disabled={!signUpState.password || !emailValid}
                                            >Sign Up</button>
                                        </div>
                                    </div>

                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </form>


        </>
    )
};

export default Signup;