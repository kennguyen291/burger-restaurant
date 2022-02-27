import React from 'react'
import Movie from "../movie/movie"
import "./movieList.css"


function movieList({moviesList}) {
  return (
    <div className = "movielist__container">
      {moviesList.map((movie) => (
        <Movie item key={movie.ID} movie= {movie} cinemaworldIsCheaper = {movie.cinemaworldIsCheaper}/>
      ))}</div>
  )
}



export default movieList
