import React from "react";

function Keyboard({onGuess, guessedLetters}) {
  let letters = "abcdefghijklmnopqrstuvwxyz".split('');
  
  // console.log(letters);
  
  return (
    <div className={`letterContainer grid grid-cols-9 max gap-[0.5rem] md:gap-[1rem]`}>
      {letters.map(letter => 
        <button onClick={() => onGuess(letter)} className={` hover:bg-[#2463ff] hover:text-[#fff] py-[0.5rem] w-[95%] justify-self-center text-[#261676] uppercase text-[2rem] rounded-[20px] ${guessedLetters.includes(letter) ? 'bg-[#ffffff35] cursor-not-allowed hover:bg-[#ffffff35] hover:text-[#261676]' : 'bg-[#fff]'}`} key={letter}>
          {letter}
        </button>
      )}
    </div>
  );
}

export default Keyboard;
