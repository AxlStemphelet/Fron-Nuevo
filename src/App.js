import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import './styles/App.css';
import Avatar from './components/Header/Avatar/Avatar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/avatar' element={<Avatar/>}/>
    </Routes>
  );
}

export default App;
