import { Link } from "react-router-dom";

export default function Navlog(){
    return(
       <nav className="nav">
        <div>
           <img src="/Assets/logo/logo.jpg" alt="logo" />
        </div>
        <ul>
           <li>Home</li>
           <li>Men's collection</li>
           <li>Women's collection</li>
           <li>Jewellery</li>
           <li>Electronics</li>
           <li><Link to="/login"><button>Login</button></Link></li>
           
        </ul>
        </nav>
    )
}