import React from 'react'
import PropTypes from 'prop-types'
import {Skeleton} from "@material-ui/lab"
import "./movie.css"


function Movie({movie,  cinemaworldIsCheaper}) {

 
  
  


  return (
    
      <div className="item">
        {/* <Skeleton variant="rectangular" width="100%" height= "100px" /> */}
        <div className="movie__thumbnail">
          <img
            src={movie.Poster}
            alt={movie.Title}    
            />
        </div>
       

        <div className="movie__title">{movie.Title}</div>
        <div className="price__section">
          <div className="provider">
            <div>Cinemaworld</div>
            <div>Filmworld</div>
          </div>
          <div className="price">
            <div className={cinemaworldIsCheaper ? "cheaper": ""} >$ {movie.Price}</div>
            <div className={cinemaworldIsCheaper ? "": "cheaper"}>$ {movie.filmworldPrice}</div>
          </div>

        </div>
      </div>
      
      
 
  )
}



export default Movie
