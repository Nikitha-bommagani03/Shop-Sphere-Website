import { useNavigate } from "react-router-dom"

export default function Nav(){
   let Navigate = useNavigate()
     return(
        <nav className="nav">
         <div>
            <img src="/Assets/logo/logo.jpg" alt="logo" />
         </div>
         <div><ul>
            <li onClick={()=>Navigate("/webpage")}>Home</li>
            <li onClick={()=>Navigate("/men")}>Men's collection</li>
            <li onClick={()=>Navigate("/women")}>Women's collection</li>
            <li onClick={()=>Navigate("/jwellery")}>Jewellery</li>
            <li onClick={()=>Navigate("/electronics")}>Electronics</li>
            <li><i className="fa-solid fa-cart-shopping"></i></li>
            <li><i className="fa-solid fa-user"></i></li>
         </ul></div>
         </nav>
     )
}