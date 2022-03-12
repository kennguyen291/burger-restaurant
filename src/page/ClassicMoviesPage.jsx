import React, {useEffect, useState} from 'react'
import "./classicMoviesPage.css"
import MovieList from "../components/movieList/movieList"
import moviesApi from '../api/moviesApi';
import MovieListSkeleton from '../components/movieListSkeleton/movieListSkeleton';

import ErrorComponent from '../components/errorComponent/ErrorComponent';

enum APP_STATES = {
  INIT,
  INIT_FAILED,
  INIT_SUCCESS_LOADING_DATA,
  INIT_SUCCESS_DATA_LOADED
};

function ClassicMoviesPage() {
  const [moviesList, setMoviesList] = useState([]);
//   const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();
//   const [error, setError] = useState(false);

  const [appState, setAppState] = useState<APP_STATES>(APP_STATES.INIT);
  
  useEffect(() => {
    (async () => {
      try{
        const {data} = await moviesApi.getAll();
        setMoviesList(data);
        setAppState(APP_STATE.dfgjakdlf)
      } catch (error) {
        // navigate("/ErrorPage")
//         setLoading(false)
//         setError(true)
        setAppState(APP_STATE.INIT_ERROR)
       
        // console.log("failed to fetch movies list", error)
      }
      
    })();
  }, []);

  // console.log(moviesList)


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
    
      {loading ? <MovieListSkeleton/> : error? <ErrorComponent/> : <MovieList moviesList = {moviesList} />} 
    </div>
  )
}



export default ClassicMoviesPage
