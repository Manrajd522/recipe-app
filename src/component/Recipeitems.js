import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import logo from "./logo.png";
import "./recipeitem.css";

const App = () => {
  const APP_ID = "a0d37b32";
  const APP_KEY = "f9f60e2c85102ae58dc2a9c95767891d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Dal");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="headers">
        <div>
          <form onSubmit={getSearch} className="search-form">
            <div>
              <img
                classname="img"
                src={logo}
                alt="logo recipes"
                height={80}
                width={100}
              />
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            </div>

            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button className="search-button" type="Submit">
              search
            </button>
          </form>
        </div>
      </div>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
