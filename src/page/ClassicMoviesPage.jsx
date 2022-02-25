import React, {useEffect, useState} from 'react'
import "./classicMoviesPage.css"
import MovieList from "../components/movieList/movieList"
import moviesApi from '../api/moviesApi';
import MovieListSkeleton from '../components/movieListSkeleton';



function ClassicMoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try{
        const {data} = await moviesApi.getAll();
        setMovies(data);
      } catch (error) {
        console.log("failed to fetch movies list", error)
      }
      
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

     
        {loading ? <MovieListSkeleton/> : <MovieList />}
      
      
      
    </div>
  )
}



export default ClassicMoviesPage
