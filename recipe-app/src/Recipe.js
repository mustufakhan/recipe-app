import React from 'react';
import './App.css';
  

const Recipe =(props)=>{
    return(
        <div className="box">
            <div className="innerbox">
            <h1>{props.title}</h1>
            <ol>
                {props.ingredients.map(res=>
                <li>
                    {res.text}
                    </li>
                 ) }
            </ol>
            <img src={props.image}></img>
            <h4>CALORIES : {props.calories}</h4>
            </div>
        </div>
    )
}
export default Recipe;