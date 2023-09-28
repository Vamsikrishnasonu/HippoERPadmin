import React from "react";
import { Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

const Header =()=>{
    
return(

<div className="header">
<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <ul className="nav-1">
        <li><Link className="nav-2" to ='/home'>Home</Link></li>
        <li><Link className="nav-2" to='/mens'>Mens</Link></li>
        <li><Link className="nav-2" to='/womens'>Womens</Link></li>
        <li><Link className="nav-2" to='/kids'>Accessories</Link></li>
        
    </ul>
    
</div>

)


}
export default Header