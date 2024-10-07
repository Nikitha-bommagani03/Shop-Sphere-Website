import { useEffect, useState,useRef } from "react"

export default function Cards(){
    let [state,setState]=useState([])
    let[search,setSearch]=useState("")
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(x=>x.json()).then(x=>{
            setState(x)
        }
        ).catch(()=>console.log("Failed to fetch"))
    },[])
    
   
   let count = useRef(0);
    let inc=()=>{
        count.current += 1;
    document.getElementById("counter").innerText = count.current;
    }
    let dec=()=>{
        if (count.current > 0) {
            count.current -= 1;
            document.getElementById("counter").innerText = count.current;
          }
    }
   
    return(
        <>
        <div>
            <input type="text" placeholder="Search here..." onChange={e=>setSearch(e.target.value)} className="input1"/>
        </div>
    
        
            <div className="container">
                {state.filter(x=>{
                    return(
                    x.title.toLowerCase().includes(search.toLowerCase()))
                })
                .map(x=>{
                    return(
                       
                        <div className="card" key={x.id}>
                       <img src={x.image} alt="pic" className="image"/>
                       <h4 className="head">{x.title.substring(0,50)}.....</h4>
                       <h4 className="price">${x.price}</h4>
                       <p className="des">{x.description.substring(0,100)}....</p>
                       <h4 className="rate">{x.rating["rate"]}⭐</h4>
                       <button onClick={inc} className="inc">+</button><span id="counter">{count.current}</span><button onClick={dec} className="dec">-</button>
                       <button className="add">Add to cart</button>
                   </div>
                    
                    )
                })
                }
            </div>
        </>


    )
}