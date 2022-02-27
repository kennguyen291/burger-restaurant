import React, {useEffect, useState} from 'react'
import "./classicMoviesPage.css"
import MovieList from "../components/movieList/movieList"
import moviesApi from '../api/moviesApi';
import MovieListSkeleton from '../components/movieListSkeleton/movieListSkeleton';
import { useNavigate } from "react-router-dom";




function ClassicMoviesPage() {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      try{
        const {data} = await moviesApi.getAll();
        setMoviesList(data);
        setLoading(false)
      } catch (error) {
        navigate("/ErrorPage")
        console.log("failed to fetch movies list", error)
      }
      
    })();
  }, []);

  console.log(moviesList)


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
    
      {loading ? <MovieListSkeleton/> : <MovieList moviesList = {moviesList} />} 
    </div>
  )
}



export default ClassicMoviesPage
