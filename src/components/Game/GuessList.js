import React from "react";
import Guess from "./Guess.js";
import {NUM_OF_GUESSES_ALLOWED} from '../../constants.js'
import {  range  } from "../../utils.js";

function GuessList({ guessWord, setGuessWord, guesses, guess }) {
  return (
    <>
      {/* Potentially change to p tags later */}
      <ol>
        {range(NUM_OF_GUESSES_ALLOWED).map((item, index) => (
          <>
            <Guess key={item} value={guesses[item]} />
          </>
        ))}
      </ol>
    </>
  );
}

export default GuessList;
