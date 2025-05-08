import React from 'react'

import menuImg from '../assets/icon-menu.svg'
import heartImg from '../assets/icon-heart.svg'

function Header({selectedCategory}) {
  return (
    <div className={`flex justify-between`}>
      <div className={`flex gap-x-[1rem] `}>
        <button className={`self-center bg-gradient-to-r from-[#FE71FE] to-[#7199FF] shadow-pink-sh p-[1.5rem] max-md:p-[1rem] rounded-[50%]`}>
          <img className='max-w-[100%]' src={menuImg} alt="menu or pause" />
        </button>
        <h1 className='text-[#fff] text-[4.5rem] max-md:text-[3rem] self-center'>{selectedCategory}</h1>
      </div>
      {/* Healths */}
      <div className={`flex`}>
        <progress className={`self-center h-[1.3rem] transition-all duration-500 ease-in-out mobile:w-[6rem] [&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-bar]:p-[2px_6px] mobile:[&::-webkit-progress-bar]:p-[2px_3px] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#261676]`}></progress>
        <img className='max-w-[100%] self-center' src={heartImg} alt="health img" />
      </div>
    </div>
  )
}

export default Header