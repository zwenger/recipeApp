import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')

  const APP_ID = '6e95c0e0';
  const APP_KEY = 'bf67899300d58440929bc4c98ec950dd';
  const url =`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  
  useEffect( () =>{  
    getRecipes();
  }, [query]);

const getRecipes = async () =>{
  const response = await fetch(url); // saca las comillas para que haga LA REQUEST
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}
const updateSearch = e => {
  setSearch(e.target.value);
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
}
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" name="search" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button ">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
            tittle={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            key={recipe.recipe.label} 
            ingredients={recipe.recipe.ingredients} 
          /> 
        ))}
      </div>
    </div>
  );
}

export default App;
