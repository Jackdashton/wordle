import React from "react";
import Guess from "./Guess.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

function GuessList({ guessWord, setGuessWord, guesses, guess }) {
  return (
    <>
      {/* Potentially change to p tags later */}
      <ol>
        {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
          <Guess key={num} value={guesses[num]} />
        ))}
      </ol>
    </>
  );
}

export default GuessList;
