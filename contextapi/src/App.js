import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../src/App.css";
import Unav from './Component/auth/Unav';
import Product from './Component/product/Product';
import Productpage from './Component/Productpage/Productpage';
import Cart from './Component/Cart/Cart';
import Home from './Component/Home';
import Login from './Component/auth/Login';
import Protectedroute from './Component/auth/Protectedroute/Protectedroute';

/*Koi bhi context ke value ko use karne ke liye useContext hook ko import karna mandatory hein And 
context variable ko bhi import karna important hein*/
// import { useContext } from 'react'
// import { counterContext } from './Context/Countercontex'

function App() {
  // Countercontex.js ke andhar jo counterContex variable uska value ko access karna
  // const counterState = useContext(counterContext)

  return (


    <BrowserRouter>
      <div className='app'>
        <Unav />
        {/* <Navbar /> */}

        <Routes>

          <Route exact path='/' Component={Home} />
          <Route element={<Protectedroute />}>

            <Route exact path='/Product' Component={Product} />
          </Route>
          <Route path='/Login' Component={Login} />

        </Routes>

        {/* < /> */}
      </div>
    </BrowserRouter>


  )
}

export default App