import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
const Home = () =>{

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
      
  return (
    <div className="Slider-container">
      
      <Header/>
    <Slider {...settings}>
     
      <div className="head">
        <img  className ="head-1" src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/40/1475524585-2015-nike-mag-02-original.jpg?resize=1200:*" alt=""/>
        
      </div>
      <div className="head">
        <img  className ="head-1" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80" alt=""/>
        
      </div>
      <div className="head">
        <img  className ="head-1" src="https://cdn.openpr.com/T/6/T616614381_g.jpg" alt=""/>
        
      </div>
    </Slider>
    </div>
  );

   

      

}

export default Home