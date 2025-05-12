import React from 'react'
import returnImg from '../assets/icon-back.svg'
import { Link } from 'react-router-dom'

function Return() {
  return (
    <>
      <Link className={`block bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-sh w-[94px] h-[94px] max-md:h-[64px] max-md:w-[64px] flex justify-center items-center rounded-[50%]`} to='/'>
        <img src={returnImg} alt="return home" />
      </Link>
    </>
  )
}

export default Return