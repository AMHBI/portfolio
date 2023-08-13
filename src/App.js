import React from 'react';
import { Route ,Routes } from 'react-router-dom';
import Cards from "./Components/Cards";
import Landing from "./Components/Landing";
import Contact from "./Components/Contact";

import './App.css';

function App() {

    <Routes>
       <Route path='/' element={<Landing />}/>
       <Route path='/projects' element={<Cards />}/>
       <Route path='/contact' element={<Contact />}/>
    </Routes>
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
