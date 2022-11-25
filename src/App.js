import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import AddPlayer from './pages/addPlayer';
import Navbar from './pages/navbar';
import PlayerBet from "./pages/playerBet";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/nuevoJugador" element={<AddPlayer />} />
          <Route exact path="/jugador/:id" element={<PlayerBet/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
