import React from 'react'
import ReturnHome from './ReturnHome';
function GameRules() {
  return (
    <>
        <div className={`flex items-center max-sm:justify-between`}>
            <ReturnHome />
            <h1 className={`text-center max-md:text-end xs:w-[100%] text-[5rem] max-md:text-[3rem] bg-gradient-to-b from-[#67B6FF] to-[#fff] bg-clip-text text-transparent text-stroke`}>How To Play</h1>
        </div>
        <div className={`flex max-md:flex-col gap-[1rem] mt-[4rem]`}>
            <div className={`grid max-md:grid-cols-[30px_1fr] md:gap-[1rem] max-md:gap-x-[1rem] bg-[#fff] rounded-[10px] md:text-center p-[2rem]`}>
                <h2 className={`xs:row-span-2 xs:self-center max-sm:self-end text-[#2463ff] text-[2rem] xs:text-[3rem]`}>01</h2>
                {/* <div> */}
                    <p className={`text-[2rem] text-[#261676] uppercase tracking-[2px] whitespace-nowrap`}> Choose a category </p>
                    <p className={`max-sm:col-span-2 text-[#887DC0] xs:text-[1.2rem]`}>
                        First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that opic and shows you blanks for each letter of the word.
                    </p>
                {/* </div> */}
            </div>
            <div className={`grid max-md:grid-cols-[30px_1fr] md:gap-[1rem] max-md:gap-x-[1rem] bg-[#fff] rounded-[10px] md:text-center p-[2rem]`}>
                <h2 className={`xs:row-span-2 xs:self-center text-[#2463ff] text-[2rem] xs:text-[3rem]`}>02</h2>
                {/* <div> */}
                    <p className={`text-[2rem] text-[#261676] uppercase tracking-[2px] whitespace-nowrap`}>Guess letters</p>
                    <p className={`max-sm:col-span-2 text-[#887DC0] xs:text-[1.2rem]`}>
                        Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.
                    </p>
                {/* </div> */}
            </div>
            <div className={`grid max-md:grid-cols-[30px_1fr] md:gap-[1rem] max-md:gap-x-[1rem] bg-[#fff] rounded-[10px] md:text-center p-[2rem]`}>
                <h2 className={`xs:row-span-2 self-center text-[#2463ff] text-[2rem] xs:text-[3rem]`}>03</h2>
                {/* <div> */}
                    <p className={`text-[2rem] text-[#261676] uppercase tracking-[2px] whitespace-nowrap`}>Win or lose</p>
                    <p className={`max-sm:col-span-2 text-[#887DC0] xs:text-[1.2rem]`}>
                        You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.
                    </p>
                {/* </div> */}
            </div>
        </div>
    </>
  )
}

export default GameRules;