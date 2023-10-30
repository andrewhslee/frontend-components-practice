import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='about-me' element={<AboutMe/>}/>
        <Route path='contact-me' element={<ContactMe/>}/>
      </Routes>
    </>
  );
}

export default App;
