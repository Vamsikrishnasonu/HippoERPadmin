import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mens from './Mens'
import Womens from './Womens'
import Kids from './Kids'
import Menshirts from './Components/Menshirts'
import Shirts from './Components/Shirts'
import Tshirts from './Components/Tshirts'
import Hoddies from './Components/Hoddies'
import Wintercaps from './Components/Wintercaps'
import Home from './Home'
import Nike1 from './Components/Nike1'
import LoginSignup from './Components/LoginSignup'
//import Sidebar from './Components/Sidebar';
function App() {
  return (
    <>
    <div className="App">
      
   
    
     <BrowserRouter>
     <Routes>
     <Route exact path='/' element={<LoginSignup/>}/>
     
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/mens' element={<Mens/>}/>
      <Route exact path='/womens' element={<Womens/>}/>
      <Route exact path='/kids' element={<Kids/>}/>
      <Route exact path='/nike1' element={<Nike1/>}/>
      <Route exact path='/menshirts' element={<Menshirts/>}/>
      <Route exact path='/shirts' element={<Shirts/>}/>
      <Route exact path='/wintercaps' element={<Wintercaps/>}/>
      <Route exact path='/tshirts' element={<Tshirts/>}/>
      <Route exact path='/hoddies' element={<Hoddies/>}/>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
