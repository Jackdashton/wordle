import React from "react";

function GuessList({ guessWord, setGuessWord }) {
  return (
    <>
      <h1>Previous Guesses</h1>
      <p>You searched for {guessWord}</p>
      {/* Pass in guesses in to an array, then list the array, no key warnings, index for key is fine as order won't change */}
    </>
  );
}

export default GuessList;
