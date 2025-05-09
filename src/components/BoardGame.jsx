import React, { useEffect, useState } from 'react'
// Components
import Header from './Header'
import PuzzleBoard from './PuzzleBoard'
import Keyboard from './Keyboard'
function BoardGame({categories, selectedCategory}) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [picked, setpicked] = useState('');

  let { Animals, ["Capital Cities"]: Capitals, Countries, Movies, Sports, ["TV Shows"]: TvShow } = categories;
  // console.log(categories);
  // console.log(selectedCategory);
  // console.log(Animals);
  let letters = "abcdefghijklmnopqrstuvwxyz";
  
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

  }, [selectedCategory])
  
  const handleGuess = (letter) => {
    setGuessedLetters((prev) => [...prev, letter]);
  };
  // console.log(guessedLetters);
  return (
    <>
      <Header selectedCategory={selectedCategory} />
      <PuzzleBoard letters={letters} picked={picked} guessedLetters={guessedLetters} />
      <Keyboard letters={letters} onGuess={handleGuess} guessedLetters={guessedLetters} />
    </>
  )
}

export default BoardGame