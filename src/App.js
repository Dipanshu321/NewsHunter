// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import React from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = ()=> {
  return (
    <>
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/business" element={<News key="business" pageSize={6} country="in" category="Business"/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="Entertainment"/>}></Route>
            <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="General"/>}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="Health"/>}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={6} country="in" category="Science"/>}>
            </Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="Sports"/>}>
            </Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="Technology"/>}>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App


