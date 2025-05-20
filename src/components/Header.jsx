import React from "react";
import { motion } from "motion/react";
import menuImg from "../assets/icon-menu.svg";
import heartImg from "../assets/icon-heart.svg";

function Header({ selectedCategory, scores, onPaused }) {
  // console.log('header');

  return (
    <div className={`flex justify-between gap-x-[1rem]`}>
      <div className={`flex gap-x-[1rem] w-[50%]`}>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          whileTap={{ scale: 1 }}
          onClick={onPaused}
          className={`self-center flex justify-center bg-gradient-to-r from-[#FE71FE] to-[#7199FF] shadow-pink-sh rounded-[50%] p-[0.9rem]`}
        >
          <img className="self-center" src={menuImg} alt="menu or pause" />
        </motion.button>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[#fff] text-[2.7rem] max-md:text-[1.5rem] self-center"
        >
          {selectedCategory}
        </motion.h1>
      </div>
      {/* Healths */}
      <div className={`flex w-[50%] gap-x-[1rem] self-center justify-end`}>
        <progress
          max="8"
          value={scores}
          className={`self-center h-[1.3rem] transition-all duration-500 ease-in-out mobile:w-[6rem] [&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-bar]:p-[2px_6px] mobile:[&::-webkit-progress-bar]:p-[2px_3px] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#261676]`}
        ></progress>
        <motion.img
          animate={{ scale: [1, 1.5, 1] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeIn",
          }}
          className="self-center max-w-[40px]"
          src={heartImg}
          alt="health img"
        />
      </div>
    </div>
  );
}

export default Header;
