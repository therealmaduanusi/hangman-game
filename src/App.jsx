// Hooks, routes and route
import { useEffect, useReducer } from "react";
import { Routes } from "react-router";
import { Route } from "react-router";

// components
import BoardGame from "./components/BoardGame";
import GameRules from "./components/GameRules";
import Home from "./components/Home";
import Category from "./components/Category";

import "./App.css";

const ACTION = {
  SHOW_CATEGORY: "categories",
  START_GAME: "startGame",
  QUITE_GAME: "quiteGame",
  ALL_CATIGORIES: "allCategories",
  SELECTED_CATEGORY: "selectedCategory",
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTION.SHOW_CATEGORY:
      return { ...state, category: !state.category };
    case ACTION.START_GAME:
      return { ...state, startGame: !state.startGame };
    case ACTION.QUITE_GAME:
      return { ...state, category: false, startGame: false };
    case ACTION.ALL_CATIGORIES:
      return { ...state, categories: action.payload.categories };
    case ACTION.SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload.categoryName };
    default:
      return state;
  }
}

function App() {
  const [gameMode, dispatch] = useReducer(reducer, {
    category: false,
    startGame: false,
    categories: null,
    selectedCategory: null,
  }); // show Category or show BoardGame based on condition

  //////////////////////////////////////////////////////////
  useEffect(() => {
    // Fetch and store data
    async function fetchData() {
      let data = await fetch("/data.json"); // data path
      if (!data.ok) {
        throw new Error("API data not fetching");
      }
      let response = await data.json();
      let differentCategories = response.categories;
      dispatch({
        type: ACTION.ALL_CATIGORIES,
        payload: { categories: differentCategories },
      });
    }
    fetchData();
  }, []);

  /* handle Category and Home components based on condition */
  let handleCategory = () => {
    dispatch({ type: ACTION.SHOW_CATEGORY });
  };

  // start/show board component and select the categories keys
  function getCategory(categoryName) {
    dispatch({ type: ACTION.START_GAME });
    dispatch({
      type: ACTION.SELECTED_CATEGORY,
      payload: { categoryName: categoryName },
    }); // get the category name
  }

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Renders board game when both category and start game is True */}
              {gameMode.startGame ? (
                <BoardGame
                  categories={gameMode.categories}
                  selectedCategory={gameMode.selectedCategory}
                  onGetCategory={getCategory}
                  dispatch={dispatch}
                />
              ) : gameMode.category ? (
                <Category
                  categories={gameMode.categories}
                  onGetCategory={getCategory}
                  onHandleCategory={handleCategory}
                />
              ) : (
                <Home onHandleCategory={handleCategory} />
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
export { ACTION };
