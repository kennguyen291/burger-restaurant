import React from 'react'
import PropTypes from 'prop-types'
import {Skeleton} from "@material-ui/lab"
// import {Box, Grid} from "@material-ui/core"
import "./movieListSkeleton.css"



MovieListSkeleton.propTypes = {
    length: PropTypes.number
}

MovieListSkeleton.defaultProps = {
    length: 8
}

function MovieListSkeleton({length}) {
  return (
    <div className= "skeleton__container" >
        {Array.from(new Array(length)).map((x, index) => (
            <div className = "skeleton__item" item key= {index} >
                <Skeleton variant="rectangular" width="100%" height= "120px" />
                <Skeleton width="40%" />
                <Skeleton />
                <Skeleton />
            </div>
        ))}
    </div>
    );
}





export default MovieListSkeleton
