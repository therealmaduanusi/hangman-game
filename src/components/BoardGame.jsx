import React, { useEffect, useState } from 'react'
// Components
import Header from './Header'
import PuzzleBoard from './PuzzleBoard'
import Keyboard from './Keyboard'
function BoardGame({categories, selectedCategory}) {
  //////////////////////////////////////////////////
  /* Game logic */
  /////////////////////////////////////////////////
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [picked, setpicked] = useState('');
  const [scores, setScores] = useState(8)
  const [winLosePause, setWinLosePause] = useState('');
  const [onWinLosePause, setOnWinLosePause] = useState(false);

  let { Animals, ["Capital Cities"]: Capitals, Countries, Movies, Sports, ["TV Shows"]: TvShow } = categories;
  // console.log(categories);
  // console.log(selectedCategory);
  // console.log(Animals);
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let pickedwords = picked.toLowerCase().split(' '); // convert string to an array

  // Pick a category and get it value randomly
  useEffect(() => {
    let categoryList;
    switch (selectedCategory) {
      case 'Animals':
        console.log('Animals');
        categoryList = Animals;
        break;
      case 'Movies':
        console.log('Movies');
        categoryList = Movies;
        break;
      case 'TV Shows':
        console.log('TV Shows');
        categoryList = TvShow;
        break;
      case 'Countries':
        console.log('Countries');
        categoryList = Countries;
        break;
      case 'Capital Cities':
        console.log('Capital Cities');
        categoryList = Capitals;
        break;
      case 'Sports':
        console.log('Sports');
        categoryList = Sports;
        break;
      default:
        categoryList = []
        break;
    }
  
    // console.log(categoryList);
    let random = Math.floor(Math.random() * categoryList.length);
    let picked = categoryList[random].name;
    setpicked(picked)
    console.log(picked)

  }, [Animals, Capitals, Countries, Movies, Sports, TvShow,selectedCategory])

  //////////////////////////////////////////////////
  /* Win or Lose */
  /////////////////////////////////////////////////
  useEffect(() => {
    // filter the array with an empty string (' ')
    let pickedNewArray = picked.toLowerCase().split('').filter(pickedVlaue => {
      if (pickedVlaue !== ' ') {
        return pickedVlaue
      }
    })

    let newArr = []; // new arr for correct guessed array
    picked.toLowerCase().split('').map(pickedVlaue => {
      if (guessedLetters.includes(pickedVlaue)) {
        newArr.push(pickedVlaue)

        // equate both the new correct array and the filter picked array
        if (newArr.join('') === pickedNewArray.join('')) {
          setWinLosePause('winner')
          setOnWinLosePause(true)
        }
      }
    })

    // Lose game
    if (scores === 0) {
      setWinLosePause('loser')
      setOnWinLosePause(true)
    }
    
  }, [guessedLetters, picked, scores])

  const handleGuess = (letter) => {
    setGuessedLetters((prev) => [...prev, letter]);
    if (!picked.toLowerCase().split('').includes(letter)) {
      setScores(preValue => preValue - 1)
    }
  };

  // Pause Game
  function handlePause() {
    setWinLosePause('paused')
    setOnWinLosePause(preValue => !preValue)
  }
  
  const styles = {
    fontSize: '3rem',
    color: `${winLosePause === 'winner' ? 'green' : winLosePause === 'paused' ? 'yellow' : 'red'}`,
    textAlign: 'center'
  }
  return (
    <section className={`px-[1rem] md:px-[5rem] py-[1rem]`}>
      <Header scores={scores} selectedCategory={selectedCategory} onPaused={handlePause} />
      {onWinLosePause && <h1 style={styles}>Game: {winLosePause}</h1>}
      <PuzzleBoard letters={letters} picked={pickedwords} guessedLetters={guessedLetters} />
      <Keyboard letters={letters} onGuess={handleGuess} guessedLetters={guessedLetters} onWinLosePause={onWinLosePause} />
    </section>
  )
}

export default BoardGame