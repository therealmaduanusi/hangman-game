// Hooks, routes and route
import { useEffect, useState } from "react";
import { Routes } from "react-router";
import { Route } from "react-router";

// components
import BoardGame from "./components/BoardGame";
import GameRules from "./components/GameRules";
import Home from "./components/Home";
import Category from "./components/Category";

import "./App.css";

function App() {
  let [category, setCategory] = useState(false); // show Category
  let [startGame, setStartGame] = useState(false); // show BoardGame
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState(null);

  /////////////////////////////////////////////////////
  useEffect(() => {
    // Fetch and store data
    async function fetchData() {
      let data = await fetch("/data.json"); // data path
      if (!data.ok) {
        throw new Error("API data not fetching");
      }
      let response = await data.json();
      let differentCategories = response.categories;

      setCategories(differentCategories);
    }
    fetchData(); 
  }, []);

  /* handle Category and Home components based on condition */
  let handleCategory = () => {
    setCategory((preValue) => !preValue);
  };

  // start/show board component and select the categories keys
  function getCategory(categoryName) {
    setStartGame(preValue => !preValue);
    setSelectedCategory(categoryName);
  }

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Renders board game when both category and start game is True */}
              {startGame ? (
                <BoardGame
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onGetCategory={getCategory}
                  setCategory={setCategory}
                  setStartGame={setStartGame}
                />
              ) : category ? (
                <Category
                  categories={categories}
                  onGetCategory={getCategory}
                  onHandleCategory={handleCategory}
                />
              ) : (
                <Home
                  onHandleCategory={handleCategory}
                  setCategory={setCategory}
                />
              )}
            </>
          }
        />
        <Route path="/rules" element={<GameRules />} />
        <Route path="*" element={<p>page not found</p>}></Route>
      </Routes>
    </main>
  );
}

export default App;
