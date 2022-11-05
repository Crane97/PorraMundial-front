import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import AddPlayer from './pages/addPlayer';
import Navbar from './pages/navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/userData/:id" element={<AddPlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
