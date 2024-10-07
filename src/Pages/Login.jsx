import { Link } from "react-router-dom"
import "../Styles/Style.css"
export default function Login(){
    return(
        <div className="body">
        <div className="header"></div>
        <div className="container1">
            
        <form action="" className="form">
        <h1 className="head1">Login</h1>
            <div className="contain1"><label htmlFor="" className="label">UserName</label><input type="text" required id="username" className="input"/></div>
            <div className="contain1"><label htmlFor="" className="label">Password</label><input type="password" required id="password" className   ="input"/></div>
            <button className="but" onClick={validate}>Login</button>
            <br/>
            <p className="link">Don't Have an account?<Link to="/register">Register Here</Link></p>
        </form>
        </div>
        </div>
    )
    function validate(){
        let uname=document.getElementById("username").value
        let pass=document.getElementById("password").value
        if(uname===window.localStorage.getItem("UserName")&& pass===window.localStorage.getItem("Password")){
            window.open("/webpage")
        }
        else{
            alert("Invalid login credentials")
        }
    }
}