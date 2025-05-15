import React from "react";

function Keyboard({ onGuess, guessedLetters, letters }) {
  let lettersArr = letters.split("");

  // console.log(letters);

  return (
    <div
      className={`letterContainer grid grid-cols-9 max gap-[0.5rem] md:gap-[1rem]`}
    >
      {lettersArr.map((letter) => (
        <button
          onClick={() => onGuess(letter)}
          className={` hover:bg-[#2463ff] py-[0.5rem] w-[95%] justify-self-center text-[#261676] uppercase text-[2rem] rounded-[20px] ${
            guessedLetters.includes(letter)
              ? "bg-[#ffffff35] cursor-not-allowed hover:bg-[#ffffff35] hover:text-[#261676]"
              : "bg-[#fff] hover:text-[#fff]"
          }`}
          key={letter}
          disabled={guessedLetters.includes(letter) ? true : false}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
