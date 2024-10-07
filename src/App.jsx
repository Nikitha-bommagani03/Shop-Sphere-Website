import { BrowserRouter, Route, Routes } from "react-router-dom";
import Webpage from "./Pages/Webpage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Webpageafter from "./Pages/Webpageafter";
import Error from "./Pages/Error";
import Men from "./Pages/Mens";
import Women from "./Pages/Women";
import Electronics from "./Pages/Electronics";
import Jewelery from "./Pages/Jwellery";
export default function App(){
    return(
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Webpage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/webpage" element={<Webpageafter/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="jwellery" element={<Jewelery/>}/>
        <Route path="*" element={<Error/>}/>
       </Routes>
       </BrowserRouter>
    )
}