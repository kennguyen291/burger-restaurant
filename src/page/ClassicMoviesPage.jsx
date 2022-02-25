import React, {useEffect, useState} from 'react'
import "./classicMoviesPage.css"
import MovieList from "../components/movieList/movieList"
import moviesApi from '../api/moviesApi';



function ClassicMoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const moviesData = await moviesApi.getAll();

      // for (let i = 0; i < moviesData.cinemaworld.length; i++) {
      //   moviesData.cinemaworld[i].filmworldPrice =
      //     moviesData.filmworld[i].Price;
      // }
      setMovies(moviesData.data);
    })();
  }, []);

  console.log(movies)


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
