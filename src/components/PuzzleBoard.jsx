import React from 'react';

function PuzzleBoard({ picked, guessedLetters, letters }) {
  
  return (
    <div className={`text-center xs:min-h-[530px] max-sm:min-h-[400px] flex flex-col justify-center`}>
      <div className={`flex flex-wrap justify-center gap-[2rem]`}>
        {picked.map((words, wordsIndex) => (
          <div key={wordsIndex} className="flex flex-wrap items-center justify-center gap-[0.5rem] mobile:gap-2">
            {words.split('').map((char, charIndex) => <Word key={charIndex} letter={char} />)}
          </div>
        ))}
      </div>
    </div>
  )
}

function Word({letter}) {
  return (
    <span className={`${'self-center flex justify-center items-center w-[2rem] xs:w-[5rem] h-[90px] bg-[#2463ff] text-center text-[2rem] xs:text-[3.5rem] inline-block mx-1 rounded-[30px] font-bold text-[#fff] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd]'}`}>
      {letter.toUpperCase()}
    </span>
  )
}

export default PuzzleBoard;