import React from 'react';
import './scss/app.scss';
import {Header} from './components'
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();
  
  return (
    <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
  )
}

export default App;