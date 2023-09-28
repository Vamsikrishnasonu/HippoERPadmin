import React from "react";
import Header from "../Header";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import{BsBag} from 'react-icons/bs'


const Wintercaps = () =>{

return(
    <>
    <Header/>
    
        <div >
            <img className="winter-4" src="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div>
        <div className="belts">
            <div>
            <img className="belt-2" src="https://m.media-amazon.com/images/I/71eSX2OuWCL._UX425_.jpg" alt=""/>
        </div>
        <div>
            <img className="winter-1" src="https://images-eu.ssl-images-amazon.com/images/I/61Ps61HxHoL._AC_UL232_SR232,232_.jpg" alt=""/>
        </div>
        <div>
            <img className="winter-2" src="https://m.media-amazon.com/images/I/51vi46NrgaL._UX522_.jpg" alt=""/>
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

export default Wintercaps