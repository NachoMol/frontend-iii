import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Home';

function App() {

  return (
    <>
      <div>
        <h1>Formulario con testeos</h1>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </>
  )
}

export default App
