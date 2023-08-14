import React from 'react';
import { Route ,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Cards from "./Components/Cards";
import Landing from "./Components/Landing";
import ContactForm from './Components/ContactForm';


import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
    <Routes>
       <Route path='/' element={<Landing />}/>
       <Route path='/projects' element={<Cards />}/>
       <Route path='/contact-me' element={<ContactForm />}/>
    </Routes>
      
    </div>
  );
}

export default App;
