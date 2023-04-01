import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx';
import Home from './Components/Home.jsx';
import Detail from './Components/Detail.jsx';
import CreateDog from './Components/CreateDog.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element= {<LandingPage />} />
        <Route path='/home' element= {<Home />} />
        <Route path='/home/:id' element= {<Detail />} />
        {/* <Route path='/post' element= {<CreateDog />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

