import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "./Input.js";
import GuessList from "./GuessList.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import GameOverBanner from "../Game/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {
  const [guessWord, setGuessWord] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(guessWord) {
    const nextGuesses = [...guesses, guessWord ];
    setGuesses(nextGuesses);

    if (guessWord === answer) {
      setGameStatus("won")
    } else if( nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
  }

  return (
    <>
      <GuessList guessWord={guessWord} setGuessWord={setGuessWord} guesses={guesses} answer={answer} />
      <Input guessWord={guessWord} setGuessWord={setGuessWord} handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
      {gameStatus !== "running" && (
        <GameOverBanner gameStatus={gameStatus} answer={answer} guesses={guesses}/>
      )}
    </>
  );
}

export default Game;
