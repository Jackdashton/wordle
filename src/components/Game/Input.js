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
          pattern="[A-Z]{5}"
          style={{ textTransform: 'uppercase'}}
          title="Must be five letters"
          value={guessWord}
          onChange={(event) => {
            setGuessWord(event.target.value.toUpperCase());
          }}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Input;
