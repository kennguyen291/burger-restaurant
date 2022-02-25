import React from 'react'
import PropTypes from 'prop-types'
import {Skeleton} from "@material-ui/lab"
// import {Box, Grid} from "@material-ui/core"
import "../components/movieListSkeleton.css"


MovieListSkeleton.propTypes = {
    length: PropTypes.number
}

MovieListSkeleton.defaultProps = {
    length: 8
}

function MovieListSkeleton({length}) {
  return (
    // <Box sx={{width: 1600}}>
    //     <Grid container >
        
    //         {Array.from(new Array(length)).map((x, index) => (
    //             <Grid item key= {index}  xs={6}  lg={3} >
    //                 <Box padding={10}>
    //                     <Skeleton variant="rectangular" width="100%" height={200} />
    //                     <Skeleton width="60%" />
    //                     <Skeleton />
    //                 </Box>
                  

    //             </Grid>
    //         ))}
                
    

    //     </Grid>
    // </Box>


    <div className= "container" >

        {Array.from(new Array(length)).map((x, index) => (
            <div className = "item" item key= {index} >
               
                    <Skeleton variant="rectangular" width="100%" height={130} />
                    <Skeleton width="40%" />
                    <Skeleton />
                    <Skeleton />
                

            </div>
        ))}
            


    </div>

  );
}





export default MovieListSkeleton
