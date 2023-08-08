import React from "react";

function Input() {
  const [guessWord, setGuessWord] = React.useState("Enter Word");

  return (
    <>
      <form
        className="guess-form"
        onSubmit={(event) => {
          event.preventDefault();
          console.log({guessWord})
          setGuessWord("");
        }}
      >
        <label htmlFor="word-input">Guess a Word:</label>
        <input
          type="text"
          id="word-input"
          value={guessWord}
          onChange={(event) => {
            setGuessWord(event.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
      <p>The word you guessed was: {guessWord}</p>
    </>
  );
}

export default Input;
