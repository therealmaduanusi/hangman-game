import React from 'react'
import returnImg from '../assets/icon-back.svg'
import { Link } from 'react-router-dom'

function Return() {
  return (
    <>
      <Link className={`block bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-sh w-[4rem] h-[4rem] flex justify-center items-center rounded-[50%]`} to='/'>
        <img src={returnImg} alt="return home" />
      </Link>
    </>
  )
}

export default Return