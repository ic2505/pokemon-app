import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/Landing.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [displayButton, setDisplayButton] = useState(false);
  const [isEnter, setIsEnter] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setDisplayButton(true);
    }, 2600);
  }, []);

  const handleClick = () => {
    console.log("click");
    setIsEnter(false);
    setDisplayButton(false);

    setTimeout(() => {
      console.log("reroute");
      navigate("/pokedex");
    }, 1400);
  };

  return (
    <div className={isEnter ? "start-gif" : "exit-gif"}>
      <Header />
      <div className="gif-container flex flex-col items-center ">
        {/* <h2 className="center">{"LOAD THIS BUTTON"}</h2> */}
        {displayButton ? (
          <button
            className="btn btn-active bg-sky-300 border-none"
            onClick={handleClick}
          >
            Enter
          </button>
        ) : null}
      </div>
    </div>
  );
}
