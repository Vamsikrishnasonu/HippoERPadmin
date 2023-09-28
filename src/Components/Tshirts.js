import React from "react";
import Header from "../Header";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import{BsBag} from 'react-icons/bs'

const Tshirts = () =>{

   return(

     <>
     <Header/>
     <div >
        <img className='winter-4'src="https://c0.wallpaperflare.com/preview/45/676/56/fashion-clothes-t-shirts-planning.jpg" alt=""/>
     </div>
     <div className="belts">
     <div>
        <img className="belt-3" src="https://m.media-amazon.com/images/I/61gb68vvjkL._UY741_.jpg" alt="" />
     </div>
     <div>
        <img className="belt-3" src="https://m.media-amazon.com/images/I/71v1153SkML._UY741_.jpg" alt=""/>
     </div>
     <div>
        <img className="belt-3" src="https://m.media-amazon.com/images/I/41Rb4Kt0dYL._AC_SR320,400_.jpg" alt=""/>
     </div>
     <div>
        <img className="belt-3" src="https://m.media-amazon.com/images/I/41qofIE8FUL._AC_SR160,200_.jpg" alt=""/>
     </div>
     </div>
     <div>
        <h1 className="model">Nike Shoes Models  : 
         Sizes<select className="select">
        <option>Select</option>
        <option>XS-6:7</option>
        <option>M-7:8</option>
        <option>L-8:9</option>
        <option>X-9:10</option>
        </select></h1>
        <button className="btn-3">Add To-Cart<AiOutlineShoppingCart/></button>
        <button className="btn-4">Add To-Wishlist<AiFillHeart className="heart"/></button>
        <button className="btn-5">By Now<BsBag/></button>
       </div>
     </>

   )


}


export default Tshirts