import React from "react";

function GuessList({ guessWord, setGuessWord, guesses, guess }) {
  return (
    <>
      <h1>Previous Guesses</h1>
      {/* Pass in guesses in to an array, then list the array, no key warnings, index for key is fine as order won't change */}
      <ol>
        {guesses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </>
  );
}

export default GuessList;
