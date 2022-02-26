import React from 'react'
import PropTypes from 'prop-types'
import {Skeleton} from "@material-ui/lab"
import "./movie.css"

function movie({movie}) {
  return (
    
      <div className="item">
        <Skeleton variant="rectangular" width="100%" height= "100px" />
        <div className="movie__title">{movie.Title}</div>
        <div className="price__section">
          <div className="provider">
            <div>Cinemaworld</div>
            <div>Filmworld</div>
          </div>
          <div className="price">
            <div>${movie.Price}</div>
            <div>${movie.filmworldPrice}</div>
          </div>

        </div>
      </div>
      
      
 
  )
}



export default movie
