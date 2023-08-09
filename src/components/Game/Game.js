import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "./Input.js";
import GuessList from "./GuessList.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessWord, setGuessWord] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guessWord) {
    setGuesses([...guesses, guessWord ])
  }

  return (
    <>
      <Input guessWord={guessWord} setGuessWord={setGuessWord} handleSubmitGuess={handleSubmitGuess}/>
      <GuessList guessWord={guessWord} setGuessWord={setGuessWord} guesses={guesses} />
    </>
  );
}

export default Game;
