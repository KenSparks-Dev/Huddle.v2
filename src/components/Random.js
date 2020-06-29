import React from 'react'
import  '../css/random.css'
function Random ({random}){
    const randomInfo = random.map(({name, food, color, song, movie, writer}) => {
      return(
        <div>
           < ul >
            <h4 > {name}'s Favorites</h4> 
            <li> Food: {food}</li> 
            <li > Color: {color} </li> 
            <li > Song: {song} </li>  
            <li > Movie: {movie}</li>
             <li> Writer: {writer} </li> 
           </ul>         
        </div>
      )
    })
    return (
      <div className="random">
      {randomInfo} 
        </div>
    )
  }


export default Random
