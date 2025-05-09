import React from 'react';

function PuzzleBoard({ picked, guessedLetters, letters }) {
  // console.log(guessedLetters);
  
  // let words = picked.toLowerCase().split(' ');
  let words = 'The lion kings'.toLowerCase().split('');
  // let guessedLetters = ''
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
      lines.push(words.slice(i, i + 2)); // start to end (end not included) for slice
    }
  }
  let nestedArr = [['the', 'lion'], ['king']];
  let mapNested = nestedArr.map((nestedValue, i) => {
    if (nestedValue.length === 2) {
      let demo = nestedValue.join(' ').split('')
      // console.log(demo);
    }
    nestedValue.map(value => {
      // console.log(value.split(''));
      
    })
    // console.log(nestedValue);
  })
  // console.log(lines);
  
  // let guessCategory = new Array(words.length).fill('');
  // console.log(guessCategory);
  // let hello = 'HI'
  // console.log(hello.toLowerCase());
  
  
  // console.log(splitCatergory);
  console.log(letters.split('').includes('d'));
  
  return (
    <div className={`text-center xs:min-h-[530px] max-sm:min-h-[400px] flex flex-col justify-center`}>
      <div className={`flex flex-wrap justify-center`}>
        {/* {nestedArr.map((line, lineIndex) => (
            <div key={lineIndex}  className="flex gap-x-4 justify-center items-center flex-wrap">
              {line.map((words, wordIndex) => (
                <span className={`w-[10%] h-[90px] bg-[#2463ff] text-center text-[2rem] xs:text-[3.5rem] inline-block mx-1 mb-[1rem] rounded-[30px] font-bold text-[#fff] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd]`}>{word}</span>
                words.split('').map((char, charIndex) => (
                  <span key={`${charIndex}-${wordIndex}`} className={`w-[5%] h-[90px] bg-[#2463ff] text-center text-[2rem] xs:text-[3.5rem] inline-block mx-1 mb-[1rem] rounded-[30px] font-bold text-[#fff] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd]`}>
                    {char.includes(' ') ? <span></span> : char}
                    {guessedLetters.includes(char)? char.toUpperCase() : ''}
                  </span>

                ))
              ))}
            </div>
          )
        )} */}
        {words.map((char, charIndex) => (
          letters.split('').includes(char) ? 
          <span key={charIndex} className={`${'self-center flex justify-center items-center w-[2rem] xs:w-[5rem] h-[90px] bg-[#2463ff] text-center text-[2rem] xs:text-[3.5rem] inline-block mx-1 rounded-[30px] font-bold text-[#fff] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd]'}`}>
            {/* {guessedLetters.includes(char) ? char.toUpperCase() : ''} */}
            {char.toUpperCase()}
          </span> : <span className={`self-center flex justify-center items-center w-[2rem] xs:w-[5rem] h-[90px] bg-transparent text-center text-[2rem] xs:text-[3.5rem] inline-block mx-1 mb-[1rem] rounded-[30px] font-bold text-[#fff] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-transparent`}></span>
          
        ))}
      </div>
    </div>
  )
}

export default PuzzleBoard;