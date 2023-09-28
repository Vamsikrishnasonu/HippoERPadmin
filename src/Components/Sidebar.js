import React  from "react";
import{slide as Menu} from "react-burger-menu";
import '../Components/Sidebar.css'



export default props =>{
    return(
        <Menu>
             
            <a className="menu-item" href="/home">Home</a>
            <a className="menu-item" href="/about">About</a>
            <a className="menu-item" href="/mens">Mens</a>
            <a className="menu-item" href="/womens">Women</a>
            <a className="menu-item" href="/kids">Accessories</a>
            <a className="menu-item" href="/menshirts">Men-Shirts</a>
            <a className="menu-item" href="/wintercaps">Winter Wear</a>
            <a className="menu-item" href="/tshirts">Tshirts</a>
            <a className="menu-item" href="/hoddies">Hoddies</a>
            <a className="menu-item" href="/shirts">Belts</a>
            <a className="menu-item" href="/nike1">Shoes</a>
            <a className="menu-item" href="/loginsignup">Login/Signup</a>
           
        </Menu>
    )
}