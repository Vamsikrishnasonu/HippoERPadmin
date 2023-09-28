import React from "react";
import Header from "../Header";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import{BsBag} from 'react-icons/bs'


const Shirts = () =>{

    return(
        <>
        <Header/>
            <div>
                <img className="belt-1" src="https://m.media-amazon.com/images/S/aplus-media/sc/53da85c0-3bc4-4a4d-9333-fd41729d9ebd.__CR0,0,970,600_PT0_SX970_V1___.jpg" alt=""/>
            </div>
            <div className="belts"> 
            <div>
                <img className="belt-2" src="https://m.media-amazon.com/images/S/aplus-media/sc/a286f67e-4399-49e7-8b5f-34cd8b68d946.__CR0,0,500,500_PT0_SX300_V1___.jpg" alt=""/>
            </div>
            <div>
                <img className="belt-3" src="https://m.media-amazon.com/images/I/71FfQVkvagL._UX679_.jpg" alt=""/>
            </div>
            <div>
                <img className="belt-3" src="https://m.media-amazon.com/images/S/aplus-media/sc/e6f3db07-1f15-4a95-be4e-1cc39b8dc7cc.__CR0,0,500,500_PT0_SX300_V1___.jpg" alt=""/>
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

export default Shirts