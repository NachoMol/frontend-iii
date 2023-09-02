import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Home';

function App() {

  return (
    <>
      <div>
        <h1>Clase 12 - Testeos en React</h1>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </>
  )
}

export default App
