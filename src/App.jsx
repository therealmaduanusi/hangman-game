// components
import BoardGame from './components/BoardGame'
import GameRules from './components/GameRules'
import Home from './components/Home'
import Category from './components/Category'

import './App.css'

// Hooks, routes and route
import { useEffect, useState } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router';

// Guess letter
import { categories } from '../data.json';
// let categoryNames = Object.keys(categories);
// console.log(categoryNames);
// console.log(categories['Capital Cities']);



let categoryNames = []
// Loop through categories obj keys
for (const category in categories) {
  categoryNames.push(category) // add the each key at the end of the "categoryArr"
  // console.log(category);
}

function App() {
  let [category, setCategory] = useState(false); // show Category
  let [startGame, setStartGame] = useState(false); // show BoardGame
  const [selectedCategory, setSelectedCategory] = useState(null);

  let handleCategory = () => {
    setCategory(preValue => !preValue)
  }

  useEffect(() => {
    // getCategory()
  })
  function getCategory(categoryName) {
    setStartGame(true)
    setSelectedCategory(categoryName)
  }

  return (
    <main>
      <Routes >
        <Route path='/' element={
          <>
            {category ? ( startGame ? <BoardGame categories={categories} selectedCategory={selectedCategory} /> : <Category onGetCategory={getCategory} categoryNames={categoryNames} onHandleCategory={handleCategory} /> )  : <Home onHandleCategory={handleCategory} setCategory={setCategory} />}
          </>
        } />
        <Route path='/rules' element={<GameRules />} />
        <Route path="*" element={<p>page not found</p>}></Route>
      </Routes>

    </main>
  )
}

export default App
