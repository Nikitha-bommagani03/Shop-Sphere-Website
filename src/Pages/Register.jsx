import "../Styles/Style.css"
export default function Register(){
    return(
        <div className="body">
        <div className="header"></div>
        <div className="container1">
            
            <form action="" className="form">
            <h1 className="head1">Register Here</h1>
                <div className="contain1"><label htmlFor="">FirstName</label>
                <input type="text" required pattern="[A-Z a-z]{3,10}" id="fname" className="input"/></div>
                <div className="contain1"><label htmlFor="">LastName</label>
                <input type="text" required pattern="[A-Z a-z]{3,10}" id="lname" className="input"/></div>
                <div className="contain1"><label htmlFor="">Username</label>
                <input type="text" required pattern="[A-Z a-z 0-9]{8,12}" id="uname" className="input"/></div>
                <div className="contain1"><label htmlFor="">Password</label>
                <input type="password" required pattern="[A-Z a-z 0-9]{8,10}" id="pass" className="input"/></div>
                <button type="submit" onClick={store} className ="but">Submit</button>
            </form>
        </div>
        </div>
    )
    function store(){
        
    let username=document.getElementById("uname").value 
    window.localStorage.setItem("UserName",username)
    let password=document.getElementById("pass").value
    window.localStorage.setItem("Password",password)
    let fname=document.getElementById("fname").value
    window.localStorage.setItem("FirstName",fname)
    let lname=document.getElementById("lname").value
    window.localStorage.setItem("LastName",lname)
    if(username!==""&&password!==""&&fname!==""&&lname!==""){
    window.open("/login")}
    else{
        alert("Enter your details")
    }
    }
}