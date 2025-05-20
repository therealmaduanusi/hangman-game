import React from "react";
import { motion } from "motion/react";
import homeImg from "../assets/logo.svg";
import playImg from "../assets/icon-play.svg";
import { Link } from "react-router-dom";
function Home({ onHandleCategory }) {
  return (
    // <AnimatePresence initial={false}>
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className={`flex min-h-[100dvh] items-center max-w-[100%] max-md:mx-[1rem]`}
    >
      <div
        className={`flex flex-col relative max-w-[592px] h-[500px] flex-1 mx-[auto] mt-[3rem] bg-gradient-to-b from-[#344ABA] to-[#001479da] xs:rounded-[72px] max-sm:rounded-[48px] border-t border-t-[0.5rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#2463ff] border-b border-b-[0.5rem] border-b-[#261676]`}
      >
        <div
          className={`absolute w-[100%] xs:top-[-100px] max-sm:top-[-70px] max-sm:px-[1.5rem]`}
        >
          <img
            className={`mx-auto`}
            src={homeImg}
            alt="Hangman Image Home section"
          />
        </div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          onClick={onHandleCategory}
          className={`bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-sh hover:from-[rgb(254,113,254,0.85)] hover:to-[rgb(113,153,255,0.70)] w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-[auto] mt-[100px] rounded-[50%] flex justify-center cursor-pointer`}
        >
          <img
            className="self-center"
            src={playImg}
            alt="Play image to start game"
          />
        </motion.div>
        <Link
          className="text-center inline-block mt-[3.5rem] max-w-[100%] mx-auto"
          to="/rules"
        >
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            // transition={{ type: "spring", stiffness: 500, damping: 5 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.1, bounce: 0.5 },
              ease: "easeOut",
            }}
            className={`bg-[#2463ff] text-[#fff] w-[220px] md:w-[260px] h-[62px] mx-[auto] rounded-[2rem] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd] text-[2rem] hover:bg-[#4277fd] hover:border-[#2463ff]`}
          >
            How to Play
          </motion.button>
        </Link>
      </div>
    </motion.section>
    // </AnimatePresence>
  );
}

export default Home;
