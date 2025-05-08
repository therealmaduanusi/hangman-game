import React from 'react'
import homeImg from '../assets/logo.svg'
import playImg from '../assets/icon-play.svg'
import { Link } from 'react-router-dom'
function Home({onHandleCategory}) {
  return (
    <section className={`flex min-h-[776px] items-center max-w-[100%]`}>
        <div className={`max-w-[592px] flex-1 mx-[auto] pt-[10rem] pb-[2rem] bg-gradient-to-b from-[#344ABA] to-[#001479da] rounded-[2rem] border-t border-t-[0.5rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#2463ff] border-b border-b-[0.5rem] border-b-[#261676]`}>
            <div className={`relative max-w-[400px] mx-auto`}>
                <img className={`absolute top-[-250px] `} src={homeImg} alt="Hangman Image Home section" />
            </div>
            <div onClick={onHandleCategory} className={`bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[10rem] h-[10rem] mx-[auto] rounded-[50%] flex justify-center cursor-pointer`}>
                <img className='self-center' src={playImg} alt="Play image to start game" />
            </div>
            <Link className='text-center block mt-[3.5rem]' to='/rules'>
                <button className={`bg-[#2463ff] text-[#fff] w-[15rem] mx-[auto] rounded-[2rem] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd] text-[2rem] hover:bg-[#4277fd] hover:border-[#2463ff]`}>How to Play</button>
            </Link>
        </div>
    </section>
  )
}

export default Home