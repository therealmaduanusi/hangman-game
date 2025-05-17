import React, { useEffect, useState } from "react";
// Components
import Header from "./Header";
import PuzzleBoard from "./PuzzleBoard";
import Keyboard from "./Keyboard";
function BoardGame({
  categories,
  selectedCategory,
  onGetCategory,
  setCategory,
  setStartGame,
}) {
  //////////////////////////////////////////////////
  /* Game logic */
  /////////////////////////////////////////////////
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [picked, setpicked] = useState("");
  const [scores, setScores] = useState(8);
  const [winLosePause, setWinLosePause] = useState("");
  const [onWinLosePause, setOnWinLosePause] = useState(false);
  const [playAgain, setPlayAgain] = useState('')
  
  let {
    Animals,
    ["Capital Cities"]: Capitals,
    Countries,
    Movies,
    Sports,
    ["TV Shows"]: TvShow,
  } = categories;
  // console.log(categories);
  // console.log(selectedCategory);
  // console.log(Animals);
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let pickedwords = picked.toLowerCase().split(" "); // convert string to an array
  

  // Pick a category and get it value randomly
  useEffect(() => {
    let categoryList;
    switch (selectedCategory) {
      case "Animals":
        // console.log("Animals");
        categoryList = Animals;
        break;
      case "Movies":
        // console.log("Movies");
        categoryList = Movies;
        break;
      case "TV Shows":
        // console.log("TV Shows");
        categoryList = TvShow;
        break;
      case "Countries":
        // console.log("Countries");
        categoryList = Countries;
        break;
      case "Capital Cities":
        // console.log("Capital Cities");
        categoryList = Capitals;
        break;
      case "Sports":
        // console.log("Sports");
        categoryList = Sports;
        break;
      default:
        categoryList = [];
        break;
    }

    // console.log(categoryList);
    let random = Math.floor(Math.random() * categoryList.length);
    let picked = categoryList[random].name;
    setpicked(picked);
    // console.log(picked);
  }, [Animals, Capitals, Countries, Movies, Sports, TvShow, selectedCategory, playAgain]);
  
  //////////////////////////////////////////////////
  /* Win or Lose */
  /////////////////////////////////////////////////
  useEffect(() => {
    // filter the array with an empty string (' ')
    let pickedNewArray = picked
      .toLowerCase()
      .split("")
      .filter((pickedVlaue) => {
        if (pickedVlaue !== " ") {
          return pickedVlaue;
        }
      });

    let newArr = []; // new arr for correct guessed array
    picked
      .toLowerCase()
      .split("")
      .map((pickedVlaue) => {
        if (guessedLetters.includes(pickedVlaue)) {
          newArr.push(pickedVlaue);

          // equate both the new correct array and the filter picked array
          if (newArr.join("") === pickedNewArray.join("")) {
            setWinLosePause("you win");
            setOnWinLosePause(true);
          }
        }
      });

    // Lose game
    if (scores === 0) {
      setWinLosePause("you lose");
      setOnWinLosePause(true);
    }
  }, [guessedLetters, picked, scores]);

  const handleGuess = (letter) => {
    setGuessedLetters((prev) => [...prev, letter]);
    if (!picked.toLowerCase().split("").includes(letter)) {
      setScores((preValue) => preValue - 1);
    }
  };

  // Pause Game
  function handlePause() {
    setWinLosePause("paused");
    setOnWinLosePause((preValue) => !preValue);
  }

  function newGuess() {
    // Reset all the necessary states
    setGuessedLetters([]);
    setScores(8);
    setWinLosePause('');
    setOnWinLosePause(false);
    setPlayAgain((prev) => prev === '' ? 'again' : ''); // triggers useEffect
  }
  return (
    <>
      {onWinLosePause && (
        <Modal
          winLosePause={winLosePause}
          onPaused={handlePause}
          onGetCategory={onGetCategory}
          setCategory={setCategory}
          setStartGame={setStartGame}
          newGuess={newGuess}
          setScores={setScores}
        />
      )}
      <section className={`px-[1rem] md:px-[5rem] py-[1rem]`}>
        <Header
          scores={scores}
          selectedCategory={selectedCategory}
          onPaused={handlePause}
        />
        <PuzzleBoard
          letters={letters}
          picked={pickedwords}
          guessedLetters={guessedLetters}
        />
        <Keyboard
          letters={letters}
          onGuess={handleGuess}
          guessedLetters={guessedLetters}
          onWinLosePause={onWinLosePause}
        />
      </section>
    </>
  );
}

/////////////////////////////////////////////////
/* MODAL COMPONENT */
////////////////////////////////////////////////
function Modal({
  winLosePause,
  onPaused,
  onGetCategory,
  setCategory,
  setStartGame,
  newGuess
}) {
  function playAgain() {
    newGuess()
  }
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div
        className={`relative max-w-[592px] w-full h-[445px] mx-[auto] mx-[1rem] bg-gradient-to-b from-[#344ABA] to-[#001479da] xs:rounded-[72px] max-sm:rounded-[48px] border-t border-t-[0.5rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#2463ff] border-b border-b-[0.5rem] border-b-[#261676]`}
      >
        <h2
          className={`absolute top-[-60px] md:top-[-120px] text-[5rem] md:text-[9rem] text-center w-[100%] max-sm:top-[-70px] max-sm:px-[1.5rem] bg-gradient-to-b from-[#67B6FF] to-[#fff] bg-clip-text text-transparent text-stroke capitalize`}
        >
          {winLosePause}
        </h2>
        <div className={`flex flex-col gap-[2rem] mt-[6rem]`}>
          <button
            onClick={() => {
              winLosePause === "you win" || winLosePause === "you lose"
                ? playAgain()
                : onPaused();
            }}
            className={`block bg-[#2463ff] text-[#fff] w-[226px] h-[62px] mx-[auto] rounded-[2rem] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd] text-[2rem] hover:bg-[#4277fd] hover:border-[#2463ff] uppercase`}
          >
            {winLosePause === "you win" || winLosePause === "you lose"
              ? "play again!"
              : "continue"}
          </button>
          <button
            onClick={onGetCategory}
            className={`block bg-[#2463ff] text-[#fff] w-[275px] h-[62px] mx-[auto] rounded-[2rem] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd] text-[2rem] hover:bg-[#4277fd] hover:border-[#2463ff] uppercase`}
          >
            New Category
          </button>
          <button
            onClick={() => {
              setCategory(false);
              setStartGame(false);
            }}
            className={`block bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-sh text-[#fff] w-[235px] h-[62px] mx-[auto] rounded-[2rem] text-[2rem] uppercase`}
          >
            Quite Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoardGame;
