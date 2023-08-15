import React from "react";

function GameOverBanner({ gameStatus, answer, guesses }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {" "}
          Got it in {guesses.length} guess(es)
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )}
}

export default GameOverBanner;
