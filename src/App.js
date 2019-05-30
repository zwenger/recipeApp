import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = '6e95c0e0';
  const APP_KEY = 'bf67899300d58440929bc4c98ec950dd';
  const url =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const [recipes, setRecipes] = useState([]);

  useEffect( () =>{
    getRecipes();
  }, []);

const getRecipes = async () =>{
  const response = await fetch('url'); // saca las comillas para que haga LA REQUEST
  const data = await response.json();
  console.log(data.hits);
}
  return(
    <div className="App">
      <form className="search-form">
        <input type="text" name="search" className="search-bar"/>
        <button type="submit" className="search-button ">Search</button>
      </form>
    </div>
  );
}

export default App;
