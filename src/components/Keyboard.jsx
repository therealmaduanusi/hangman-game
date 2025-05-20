import React from "react";
import { motion } from "motion/react";
function Keyboard({ onGuess, guessedLetters, letters, onWinLosePause }) {
  let lettersArr = letters.split("");

  // console.log(letters);

  return (
    <div
      className={`letterContainer grid grid-cols-[repeat(auto-fit,_minmax(40px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(109px,_1fr))] gap-[0.5rem] md:gap-[1rem]`}
    >
      {lettersArr.map((letter) => (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{
            duration: 0.5, ease: "easeIn"
          }}
          onClick={() => onGuess(letter)}
          className={`
            uppercase font-bold text-[#261676] w-[100%] h-[84px] max-sm:h-[56px]
            text-[2rem] rounded-[24px] max-sm:rounded-[8px]
            justify-self-center 
            ${guessedLetters.includes(letter)
              ? "bg-[#ffffff35] cursor-not-allowed hover:bg-[#ffffff35] hover:text-[#261676]"
              : onWinLosePause
              ? "cursor-not-allowed bg-[#fff] hover:bg-[#fff]"
              : "bg-[#fff] hover:bg-[#2463ff] hover:text-[#fff]"}
          `}
          key={letter}
          disabled={
            guessedLetters.includes(letter)
              ? true
              : onWinLosePause
              ? true
              : false
          }
        >
          {letter}
        </motion.button>
      ))}
    </div>
  );
}

export default Keyboard;
