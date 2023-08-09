import React from "react";

function Input( {guessWord, setGuessWord, handleSubmitGuess} ) {


  return (
    <>
      <form
        className="guess-form"
        onSubmit={(event) => {
          event.preventDefault();
          console.log({guessWord})
          setGuessWord("");
          handleSubmitGuess(guessWord);
        }}
      >
        <label htmlFor="word-input">Guess a Word:</label>
        <input
          type="text"
          id="word-input"
          pattern="[A-Za-z]{5}"
          title="Must be five letters"
          value={guessWord}
          onChange={(event) => {
            setGuessWord(event.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Input;
