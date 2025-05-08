import React from 'react';

function PuzzleBoard({ picked, guessedLetters }) {
  // console.log(guessedLetters);
  
  let words = picked.toLowerCase().split(' ');
  console.log(words);
  
  // Define how to break the words into lines
  let lines;
  if (words.length === 2) {
    // Just one line for two words
    lines = [words];
  } else {
    // Break into lines of two words each for >2 words
    lines = [];
    for (let i = 0; i < words.length; i += 2) {
      lines.push(words.slice(i, i + 2));
    }
  }
  console.log(lines);
  
  // let guessCategory = new Array(words.length).fill('');
  // console.log(guessCategory);
  // let hello = 'HI'
  // console.log(hello.toLowerCase());
  
  
  // console.log(splitCatergory);
  
  return (
    <div className={`text-center xs:min-h-[530px] max-sm:min-h-[400px] flex flex-col justify-center`}>
      <div className={`flex flex-wrap flex-col justify-center`}>
        {lines.map((line, lineIndex) => (
            <div key={lineIndex}  className="flex gap-x-4 justify-center flex-wrap">
              {line.map((words, wordIndex) => (
                // <span className={`w-[10%] h-[90px] bg-[#2463ff] text-center text-[2rem] xs:text-[3.5rem] inline-block mx-1 mb-[1rem] rounded-[30px] font-bold text-[#fff] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd]`}>{word}</span>
                words.split('').map((char, charIndex) => (
                  <span key={`${charIndex}-${wordIndex}`} className={`w-[5%] h-[90px] bg-[#2463ff] text-center text-[2rem] xs:text-[3.5rem] inline-block mx-1 mb-[1rem] rounded-[30px] font-bold text-[#fff] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd]`}>
                    {char}
                    {/* {guessedLetters.includes(char)? char.toUpperCase() : ''} */}
                  </span>

                ))
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default PuzzleBoard;