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

  let { Animals, ["Capital Cities"]: Capitals, Countries, Movies, Sports, ["TV Shows"]: TvShow } = categories;
  // console.log(categories);
  // console.log(selectedCategory);
  // console.log(Animals);
  let letters = "abcdefghijklmnopqrstuvwxyz";
  
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
  
  // Add guessed letter to an array
  const handleGuess = (letter) => {
    setGuessedLetters((prev) => [...prev, letter]);
    if (!picked.toLowerCase().split('').includes(letter)) {
      setScores(preValue => preValue - 1)
    }
  };
  
  console.log(guessedLetters);
  let pickedwords = picked.toLowerCase().split(' ');
  return (
    <section className={`px-[1rem] md:px-[5rem] py-[1rem]`}>
      <Header scores={scores} selectedCategory={selectedCategory} />
      <PuzzleBoard letters={letters} picked={pickedwords} guessedLetters={guessedLetters} />
      <Keyboard letters={letters} onGuess={handleGuess} guessedLetters={guessedLetters} />
    </section>
  )
}

export default BoardGame