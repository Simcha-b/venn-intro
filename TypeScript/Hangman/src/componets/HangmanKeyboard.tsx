import styles from "../Keyborad.module.css";
import React from "react";
const keys = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

type HangmanKeyboardProps = {
  disabledLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

function HangmanKeyboard({
  disabledLetters,
  incorrectLetters,
  addGuessedLetter,
}: HangmanKeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {keys.map((key) => {
        const isIncorrect = incorrectLetters.includes(key);
        const isDisabled = disabledLetters.includes(key);
        return (
          <button
            key={key}
            className={`${styles.btn} ${isIncorrect ? styles.active : ""} ${
              isDisabled ? styles.inactive : ""
            }`}
            disabled={isIncorrect || isDisabled}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default HangmanKeyboard;
