import React from 'react'
import { Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';

const App = () => {
  return (
    <>      
      <Navbar />
      
      <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/productDetails' element={<ProductDetails />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='*' element={<Errorpage />}></Route>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
