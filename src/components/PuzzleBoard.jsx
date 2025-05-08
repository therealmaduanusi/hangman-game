import React from 'react';

function PuzzleBoard({ picked, guessedLetters }) {
  // console.log(guessedLetters);
  
  let words = picked.toLowerCase().split(' ');
  console.log(words);
  
  // Manually group words into lines (adjust this logic as needed)
  let lines = [];
  if (words.length === 3) {
    // 3 words: make 2 lines
    lines = [[words[0], words[1]], [words[2]]];
  } else if (words.length === 2) {
    // 2 words: 2 lines
    lines = [[words[0]], [words[1]]];
  } else {
    // fallback: single line
    lines = [words];
  }
  console.log(lines);
  
  // let guessCategory = new Array(words.length).fill('');
  // console.log(guessCategory);
  // let hello = 'HI'
  // console.log(hello.toLowerCase());
  
  
  // console.log(splitCatergory);
  
  return (
    <div className={`text-center xs:min-h-[530px] max-sm:min-h-[400px] flex flex-col justify-center`}>
      <div className={`flex flex-wrap flex-col justify-center item-center`}>
        {lines.map((line, lineIndex) => (
            <div key={lineIndex}  className="flex gap-x-4 justify-center flex-wrap">
              {line.map((word, wordIndex) => (
                <span className={`w-[10%] h-[90px] bg-[#2463ff] text-center text-[2rem] xs:text-[3.5rem] inline-block mx-1 mb-[1rem] rounded-[30px] font-bold text-[#fff] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd]`}>{word}</span>
                // word.split.map((char, charIndex) => (
                //   <span key={`${wordIndex}-${charIndex}`} className={`w-[10%] h-[90px] bg-[#2463ff] text-center text-[2rem] xs:text-[3.5rem] inline-block mx-1 mb-[1rem] rounded-[30px] font-bold text-[#fff] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd]`}>
                //     {guessedLetters.includes(char)? char.toUpperCase() : ''}
                //   </span>

                // ))
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default PuzzleBoard;