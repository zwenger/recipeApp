import React from 'react';

const Recipe = ({tittle,calories,image, ingredients}) => {
  return(
    <div>
       <h1>{tittle}</h1>
       <ol> 
         {ingredients.map(ingredient =>(
           <li>{ingredient.text}</li>
         ))}
       </ol>
       <p>Calories: {calories}</p>
       <img src={image} alt=''/>
    </div>
  );
}
export default Recipe;
 