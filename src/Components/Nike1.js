import React from "react";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import{BsBag} from 'react-icons/bs'
import Header from "../Header";
const Nike1 = () =>{

  return(
    <>
      <Header/>
      <div >
        <img  className="belt-1"src="https://wallpaperset.com/w/full/e/6/4/186714.jpg" alt=""/>
        </div>
        <div className="belts">
        <img  className="nike-1"src="https://wallpaperaccess.com/full/6928790.jpg" alt=""/>
        <img  className="nike-1"src="https://wallpaperaccess.com/full/10536546.jpg" alt=""/>
        <img  className="nike-1"src="https://wallpaperaccess.com/full/10536550.jpg" alt=""/>
        <img className="nike-1" src="https://wallpaperaccess.com/full/10536554.jpg" alt=""/>
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

export default Nike1