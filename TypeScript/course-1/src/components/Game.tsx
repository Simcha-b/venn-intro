import React, { useState } from "react";
import GameButton from "./GameButton";

function Game() {
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guessHistory, setGuessHistory] = useState<number[]>([]);
  const [messeg, setMesseg] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<boolean>(true);
  const [numOfGuesses, setNumOfGuesses] = useState<number>(10);

  // Generate a random number between 1 and 100
  function generteRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Handle the input change
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentGuess(e.target.value);
  }

  // Check the guess
  function checkGuess() {
    const numGuess = parseInt(currentGuess);
    setGuessHistory((prev) => [...prev, numGuess]);
    setCurrentGuess("");
    setNumOfGuesses(numOfGuesses - 1);
    if (numGuess === generteRandomNumber()) {
      setMesseg("נכון");
      setGameStatus(false);
    } else if (numGuess > generteRandomNumber()) {
      setMesseg("גבוה מדי");
    } else {
      setMesseg("נמוך מדי");
    }

    if (numOfGuesses === 1) {
      setMesseg("נגמרו הניחושים");
      setGameStatus(false);
    }
  }

  return (
    <div>
      {gameStatus && (
        <>
          <h1>נחש את המספר שנבחר</h1>
          <h3>מספר הניחושים שנשארו: {numOfGuesses}</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <input type="number" value={currentGuess} onChange={handleChange} />

            <GameButton
              backgroundColor="green"
              fontSize={20}
              onClick={() => checkGuess()}
            >
              בחר
            </GameButton>
          </div>
          <p>{messeg}</p>
          <p>:ניחושים קודמים</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {guessHistory.map((guess, index) => (
              <p key={index}>{guess}</p>
            ))}
          </div>
        </>
      )}
      {!gameStatus && (
        <GameButton backgroundColor="blue" onClick={() => setGameStatus(true) }>
          לחץ כאן להתחלת משחק חדש
        </GameButton>
      )}
    </div>
  );
}

export default Game;
