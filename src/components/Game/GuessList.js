import React from "react";

function GuessList({ guessWord, setGuessWord, guesses, guess }) {
  return (
    <>
      <h1>Previous Guesses</h1>
      {/* Potentially change to p tags later */}
      <ol>
        {guesses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </>
  );
}

export default GuessList;
