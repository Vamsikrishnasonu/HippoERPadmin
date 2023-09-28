import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


const Mens = () => {

    return (
         <div>
            <Header/>
        <div className="shoe">
            
            <div className="shoe-card">
                <Link to='/nike1'><img className="shoe-1" src="https://wallpaperaccess.com/full/10536532.jpg" alt="" /></Link>
                <button className="btn"><Link  className="link"to='/nike1' >Order Now</Link></button>
            </div>
            <div className="shoe-card">
            <Link  to='/menshirts' ><img className="shoe-1" src="https://m.media-amazon.com/images/I/71U6rN80RIL._UY741_.jpg" alt="" /></Link>
                <button className="btn"><Link  className="link"to='/menshirts' >Order Now</Link></button>
            </div>
            <div className="shoe-card">
            <Link  to='/hoddies' ><img className="shoe-1" src="https://m.media-amazon.com/images/I/61ucgKY1S6L._UY741_.jpg" alt="" /></Link>
                <button className="btn"><Link  className="link"to='/hoddies' >Order Now</Link></button>
            </div>
            <div className="shoe-card">
            <Link  to='/wintercaps' ><img className="shoe-1" src="https://m.media-amazon.com/images/I/71PgXiVK43L._UX679_.jpg" alt="" /></Link>
                <button className="btn"><Link  className="link"to='/wintercaps' >Order Now</Link></button>
            </div>
            <div className="shoe-card">
            <Link  to='/shirts' > <img className="shoe-1" src="https://m.media-amazon.com/images/I/71FfQVkvagL._UX679_.jpg" alt="" /></Link>
                <button className="btn"><Link  className="link"to='/shirts' >Order Now</Link></button>
            </div>
            <div className="shoe-card">
            <Link  to='/tshirts' > <img className="shoe-1" src="https://m.media-amazon.com/images/I/712GTx78xmL._UY741_.jpg" alt="" /></Link>
                <button className="btn"><Link  className="link"to='/tshirts' >Order Now</Link></button>
            </div>
           

        </div>
</div>
    )
}

export default Mens