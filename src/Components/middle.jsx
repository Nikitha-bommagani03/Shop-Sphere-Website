import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Body(){
    return(
        <div>
       <div className="caro">
       <div className="caro1"> 
            <Carousel>
                <div><img src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg" alt="img" /></div>
               <div> <img src="https://cdn.pixabay.com/photo/2018/01/14/23/05/ecommerce-3082813_1280.jpg" alt="img" /></div>
                <div><img src="https://cdn.pixabay.com/photo/2017/10/29/17/31/online-2900303_1280.jpg" alt="img" /></div>
            </Carousel>
        </div>
       </div>
        <h1 className="ch1">Your Style, Your Way—Delivered to Your Doorstep.</h1>
        <p className="ch2">Shop more with Shopsphere and get Large Discounts.</p>
        </div>
    )
}