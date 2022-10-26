import React from "react";
import Header from "../components/Header";

export default function About() {
  var img = new Image();

  img.onload = function () {
    var height = img.height;
    var width = img.width;

    // code here to use the dimensions
    console.log(width, height);
  };

  img.src = "../assets/PokemonTypes.webp";

  return (
    <div>
      <Header />
      <h1>About</h1>
    </div>
  );
}
