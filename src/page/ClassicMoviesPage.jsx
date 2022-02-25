import React from 'react'
import "./classicMoviesPage.css"
import MovieList from "../components/movieList/movieList"


function ClassicMoviesPage() {
  return (
    <div className="movies__page">
      <h1>Prince's Theatre</h1>

      <h2>Classic Movies At Home</h2>

      <div className="info__container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt<br/> ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </div>
      

      <h3>Classic Movie List</h3>

      <div className="movieList__container">
      <MovieList />
      </div>
      
    </div>
  )
}



export default ClassicMoviesPage
