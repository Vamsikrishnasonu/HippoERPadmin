import React, { useState } from "react";
import '../Components/LoginSignup.css'
import {Link} from 'react-router-dom'
const LoginSignup = () =>{
    const[action,setAction] = useState("Sign Up");

 return(
    <div className="container">
        <div className="header-1">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
           {action=="Login"?<div></div>: <div className="input">
            
            <input type="text" placeholder="Enter Your UserName"/>
            </div>}
            </div>
            <div className="input">
                
                <input type="email" placeholder="Enter Your Email-Id"/>
            </div>
            <div className="input">
                
                <input type="password" placeholder="Enter Your Password"/>
            </div>
            {action=="Sign Up"?<div></div>:<div className="forgot-paassword">
                Lost password?<span><a href="Password.js">Click Here</a></span>
            </div>}
            <div className="submit-container">
                <div className={action=="Login"?"submit gray": "submit"} onClick={() => {setAction("Sign Up")}}>Signup</div>
                <div className={action =="Signup"?"submit gray":"submit"}onClick={() =>{setAction("Login")}}><Link className="btn-6" to='/home'>Login</Link></div>
            </div>
    </div>
 )

}

export default LoginSignup
