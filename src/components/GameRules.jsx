import React from 'react'
import ReturnHome from './ReturnHome';
function GameRules() {
  return (
    <section className={`min-h-[100dvh] md:mx-auto flex flex-col justify-center gap-y-[2rem] p-[1rem]`}>
            <div className={`flex items-center max-md:justify-between`}>
                <ReturnHome />
                <h1 className={`text-center max-md:text-end md:w-[100%] md:text-[10rem] text-[3.4rem] bg-gradient-to-b from-[#67B6FF] to-[#fff] bg-clip-text text-transparent text-stroke`}>How To Play</h1>
            </div>
            <div className={`flex max-md:flex-col gap-[3.2rem]`}>
                <div className={`md:max-w-[384px] grid max-md:grid-cols-[15%_1fr] md:gap-[1rem] max-md:gap-x-[1rem] bg-[#fff] rounded-[40px] md:text-center p-[2rem]`}>
                    <h2 className={`xs:row-span-2 self-center text-[#2463ff] text-[1.5rem] xs:text-[4rem]`}>01</h2>
                    <p className={`text-[2rem] text-[#261676] uppercase tracking-[2px] whitespace-nowrap`}> Choose a category </p>
                    <p className={`max-sm:col-span-2 text-[#887DC0] xs:text-[1.2rem]`}>
                        First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that opic and shows you blanks for each letter of the word.
                    </p>
                </div>
                <div className={`md:max-w-[384px] grid max-md:grid-cols-[15%_1fr] md:gap-[1rem] max-md:gap-x-[1rem] bg-[#fff] rounded-[40px] md:text-center p-[2rem]`}>
                    <h2 className={`xs:row-span-2 self-center text-[#2463ff] text-[1.5rem] xs:text-[4rem]`}>02</h2>
                    <p className={`text-[2rem] text-[#261676] uppercase tracking-[2px] whitespace-nowrap`}>Guess letters</p>
                    <p className={`max-sm:col-span-2 text-[#887DC0] xs:text-[1.2rem]`}>
                        Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.
                    </p>
                </div>
                <div className={`md:max-w-[384px] grid max-md:grid-cols-[15%_1fr] md:gap-[1rem] max-md:gap-x-[1rem] bg-[#fff] rounded-[40px] md:text-center p-[2rem]`}>
                    <h2 className={`xs:row-span-2 self-center text-[#2463ff] text-[1.5rem] xs:text-[4rem]`}>03</h2>
                    <p className={`text-[2rem] text-[#261676] uppercase tracking-[2px] whitespace-nowrap`}>Win or lose</p>
                    <p className={`max-sm:col-span-2 text-[#887DC0] xs:text-[1.2rem]`}>
                        You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.
                    </p>
                </div>
            </div>
    </section>
  )
}

export default GameRules;