import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import About from "./views/About";
import Pokedex from "./views/Pokedex";
import MyPokemon from "./views/MyPokemon";
import PokemonDetail from "./views/PokemonDetail";
import Error from "./views/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokemonDetail />} />
        <Route path="/my_pokemon" element={<MyPokemon />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
