import './App.css';
import { About } from './Components/About';
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import {TextForm}  from "./Components/TextForm";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { type } from '@testing-library/user-event/dist/type';

function App() {

  // let bg={

  //   backgroundColor:'#61dafbaa'
  // }
  const [mode, setmode] = useState('');

  const [alert, setalert] = useState(null);

  const showalert = (massage , type)=>{
    setalert({
      msg : massage ,
      type : type
    })
    setTimeout(()=>{
      setalert(null);

    } ,1500 )
  }
  
  const toglemode = ()=>{
    if (mode==='dark') {
    setmode('');
    document.body.style.backgroundColor = 'rgba(211, 246, 246, 0.355)';
    showalert(
      "Light Mode is Enabled","success");
    }
    else {
    setmode('dark');
      document.body.style.backgroundColor = 'rgb(1 19 47 / 86%)';
      showalert( "Dark Mode is Enabled","success");
    }
  }
  return (
    <BrowserRouter>
    <>
    <Navbar title="Techno Hub (Text utils)" mode={mode}  toglemode={toglemode}/>
    <Alert alert={alert}  />
    <div className="container my-3">
    <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}  showalert={showalert} />} />
            <Route path="/about" element={<About alerts= " This is techo hub" mode={mode} />} />
    </Routes>
    </div>
    </>
    </BrowserRouter>
)
};
export default App; 

