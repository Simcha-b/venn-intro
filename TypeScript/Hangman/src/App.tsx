import React, { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./componets/HangmanDrawing";
import HangmanWord from "./componets/HangmanWord";
import HangmanKeyboard from "./componets/HangmanKeyboard";
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log(wordToGuess);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );


  const correctLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  
  const addGuessedLetter = useCallback((letter: string) => {
    setGuessedLetters((prev) => {
      if (prev.includes(letter)) return prev;
      return [...prev, letter];
    });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Win Lose</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard
          disabledLetters={correctLetters}
          incorrectLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
