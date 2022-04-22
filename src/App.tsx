import React from 'react';
import 'bulma/css/bulma.min.css';
import { Wrapper } from './components/Wrapper';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile';
export default () =>  {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> 
    </Wrapper>
  );
}
