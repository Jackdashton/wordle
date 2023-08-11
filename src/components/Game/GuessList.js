import React from "react";
import Guess from "./Guess.js";

function GuessList({ guessWord, setGuessWord, guesses, guess }) {
  return (
    <>
      <h1>Previous Guesses</h1>
      {/* Potentially change to p tags later */}
      <ol>
        {guesses.map((item, index) => (
          <>
            <Guess />
            <li key={index}>{item}</li>
          </>
        ))}
      </ol>
    </>
  );
}

export default GuessList;
