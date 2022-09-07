import React,{useState} from "react";
import "./login.css"
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const navigate = useNavigate();
    const [loginState,setLoginState]=useState({
        email:"",
        password:""
    })
    const [ emailValid, setEmailValid ] = useState(false);

    const login = (e)=>{
        e.preventDefault();
        axios({
          method:"post",
          url:"https://reqres.in/api/login",
          data:{
            email:loginState.email,
            password:loginState.password
          }
        }).then((res)=>{  
          if(res.status == 200){
          navigate('/gotomenu')
          toast("user logged in successfully")
          localStorage.setItem("login", true);
        
          }
        }).catch((err)=>{
         console.log(err)
        })
       
    }

    const handleInputChange=(e)=>{
        let value;
        value= e.target.value;
        setLoginState({
            ...loginState,
            [e.target.name]:value
        })
        if(e.target.name === "email"){
            checkEmailValue(value)
        }
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
                        <div className="row d-flex justify-content-center ">
                           

                            
                            <div className="col-md-6 py-5">
                                <div className="button-box">
                                    <button type="button" className="login-tog toggle-btn">Login</button>
                                    <Link to="/signup"> <a type="button" className="signup-tog toggle-btn">Sign Up</a></Link>

                                </div>
                                <div className="login-card">


                                    <h2 className="px-5 mt-5" >Login</h2>
                                    <h4 className="px-5 mb-5" >Login to your account</h4>



                                    {/* -- Email input -- */}
                                    <div className="form px-5 mb-3">
                                        <span className="svg"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22 6L12 13L2 6" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        </span>
                                        <input type="email" className="form-control " placeholder="Email" name="email"
                                            id="email" value={loginState.email} onChange={handleInputChange}/>
                                    </div>

                                    {/* -- Password input -- */}
                                    <div className="form px-5 mb-2">
                                        <span className="svg"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#0465CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>
                                        <input type="password" className="form-control" placeholder="Your Password" name="password"
                                            id="password" value={loginState.password} onChange={handleInputChange}/>
                                       
                                    </div>

                                    {/* <!-- Checkbox --> */}
                                    <div class="row px-5 mt-4 mb-3">
                                        <div class="col-6">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                            <label className="form-check-label text-secondary" for="form2Example3">
                                                Remember me
                                            </label>
                                        </div>
                                        
                                    </div>

                                    {/* -- submit button -- */}

                                    <div className="row px-5 mb-5">
                                        <div className=" mt-3 ">
                                            <button  className="login-btn  btn-lg" 
                                             disabled={!emailValid || !loginState.password} onClick={login}>Login  </button>
                                                <ToastContainer/> 
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

export default Login;