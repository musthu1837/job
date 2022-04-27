import React from 'react';
import 'bulma/css/bulma.min.css';
import { Wrapper } from './components/Wrapper';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile';
import Jobs from './components/Jobs'
export default () =>  {
  return (
    <Wrapper>
      <Routes>
        <Route path="/job" element={<Profile />}/>
        <Route path="/job/about" element={<About />} />
        <Route path="/job/profile" element={<Profile />} />
        <Route path="/job/jobs" element={<Jobs/>} />
      </Routes> 
    </Wrapper>
  );
}
