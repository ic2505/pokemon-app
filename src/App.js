import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import About from "./views/About";
import Pokedex from "./views/Pokedex";
import MyPokemon from "./views/MyPokemon.js";
import Error from "./views/Error";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="myPokemon" element={<MyPokemon />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
