import React from "react";

function PuzzleBoard({ picked, guessedLetters }) {
  return (
    <div
      className={`text-center xs:min-h-[530px] max-sm:min-h-[450px] flex flex-col justify-center`}
    >
      <div className={`flex flex-wrap justify-center gap-[2rem]`}>
        {picked.map((words, wordsIndex) => (
          <div
            key={wordsIndex}
            className="flex flex-wrap items-center justify-center gap-[0.5rem] mobile:gap-2"
          >
            {words.split("").map((char, charIndex) => (
              <Word
                key={charIndex}
                guessedLetters={guessedLetters}
                letter={char}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Word({ letter, guessedLetters }) {
  return (
    <span
      className={`
        self-center flex justify-center items-center 
        w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] 
        h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] 
        bg-[#2463ff] text-white text-center 
        text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] 
        mx-1 rounded-[20px] sm:rounded-[24px] md:rounded-[30px]
        font-bold 
        border-t-[0.3rem] border-r-[0.3rem] border-l-[0.3rem] 
        border-[#4277fd]
      `}
    >
      {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  );
}

export default PuzzleBoard;
