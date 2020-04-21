import React,{useState,useEffect} from 'react';
import './App.css';
import Recipe from './Recipe'


const API_id = "1b46e6e9";
const API_KEY="7cb2504bb1d3d2a1a00a4ae444669225";
const req=`https://api.edamam.com/search?q=chicken&app_id=${API_id}&app_key=${API_KEY} `;

const App =()=>{
  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState('');
  const [filter, setfilter] = useState('chicken');

 useEffect(() => {
    getrecipes();
  }, [filter])
  const getrecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${filter}&app_id=${API_id}&app_key=${API_KEY} `);
    const data = await response.json();
   setrecipes(data.hits)
    }
    const update = e=>{
      setsearch(e.target.value)
    }
    const getfilter = e =>{
      e.preventDefault();
      setfilter(search)
      setsearch('')
    }
  return(
      <div className="App">
        <h1 className="title">MY FOOD BOOK</h1>
        <form onSubmit={getfilter}>
          <input type="text" value={search} placeholder="search your recipe here..." onChange={update}/>
          <button>Search</button>
          <div className="recipes">
          {recipes.map(res=>
           <Recipe key={res.recipe.label} title={res.recipe.label} calories={res.recipe.calories} image={res.recipe.image} ingredients={res.recipe.ingredients}/>
          )}
          </div>
        </form>
      </div>
  )
}

export default App;
