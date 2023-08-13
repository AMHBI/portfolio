import React from 'react';
import { Route ,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Cards from "./Components/Cards";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
    <Routes>
       <Route path='/' element={<Landing />}/>
       <Route path='/projects' element={<Cards />}/>
       <Route path='/contact' element={<Contact />}/>
    </Routes>
      
    </div>
  );
}

export default App;
