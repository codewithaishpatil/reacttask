// import React,{useState ,useRef} from 'react';

// import Gotomenu from './Gotomenu';

// function Login(props) {
//     const email=useRef()
//     const password=useRef()
//     const getEmail=localStorage.getItem("emailData")
//     const getPass=localStorage.getItem("passData")
//     const handlesubmit=()=>{
//         if(email.current.value=="abc@gmail.com"&&password.current.value=="123456"){
//             localStorage.setItem("emailData","abc@gmail.com")
//             localStorage.setItem("passData","123456")
//         }
//     }
    
  
//     return (
//         <div className='container '>
//           <div className='row d-flex justify-content-center ' style={{"marginTop":"15%"}}>
//             <div className='col-md-4'>


//         { getEmail&&getPass?<Gotomenu />:<form onSubmit={handlesubmit}>
// <div  className="form-group mb-3">
//     <label for="inputEmail ">Email</label>
//     <input type="email"  className="form-control" id="inputEmail" placeholder="Email" ref={email} />
// </div>
// <div  className="form-group  mb-3">
//     <label htmlFor="inputPassword">Password</label>
//     <input type="password"  className="form-control" id="inputPassword" placeholder="Password" ref={password} />
// </div>

// <button type="submit"  className="btn btn-primary">Login</button>
// </form>}
// </div>
// </div></div>
//     );
// }

// export default Login;




