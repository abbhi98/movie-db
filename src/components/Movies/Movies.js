import * as React from 'react';
import './Movies.css'
import  MovieCard  from "../MovieCard/MovieCard.js"
import {  useState,useContext } from "react"
import Grid from '@mui/material/Grid';
import Search from "../Search/Search.js";
import Preview from "../Preview/Preview.js";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DeviceContext } from "../../App.js";
import Modal from '@mui/material/Modal';
import MoviesData from '../../js/movies.json'
import Box from '@mui/material/Box';
import MobileNavbar from "../MobileNavbar/MobileNavbar.js";



const Movies = ()=> {

    let originalMovieList = MoviesData // original Array stored for empty search value

    const [movieList,updateMovieList] = useState([...originalMovieList])
    const [selectedMovie,updateSelectedMovie] = useState({})

    // selected Movie index maintained to get preview location
    const [selectedMovieIndex,updateSelectedMovieIndex] = useState(null)


    function filterMovies(value){
        updateSelectedMovieIndex(null)
        updateSelectedMovie({})
        if(value){
            let result = []
            originalMovieList.forEach(movie=>{
                if(movie.title.toLowerCase().includes(value.toLowerCase()) || movie.plot.toLowerCase().includes(value.toLowerCase())){
                    result.push(movie)
                }
            })
            updateMovieList(result)
        }else{
            updateMovieList([...originalMovieList])
        }
    }

    function handleClick(movie,index){
        updateSelectedMovieIndex(index)
        updateSelectedMovie(movie)
    }

    function showPreview(index){
        // render preview component when new row starts and only for the nearest element
        return index % 5 === 0 && index === selectedMovieIndex - selectedMovieIndex % 5
    }

    function handleClose(){
        updateSelectedMovieIndex(null)
        updateSelectedMovie({})
        updateMovieList([...originalMovieList])
    }

    const isMobile = useContext(DeviceContext);  

    return (
        <section id="movies-container" className={isMobile ? 'w-100' : ''}>
            {/* Topbar for Mobile View */}
            {isMobile && <MobileNavbar filterMovies={filterMovies}/>}

            {!isMobile && 
                <div className="header-container">
                    <Search filterMovies={filterMovies}/>
                    <div className="header-icons">
                        <WbSunnyIcon/>
                        <MoreVertIcon />
                    </div>
                </div>
            }

            {isMobile &&      
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={selectedMovie && selectedMovie.title ? true : false}
                    onClose={handleClose}
                >
                        <Box>
                            <Preview movie={selectedMovie} />
                        </Box>
                </Modal>
            }

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 10 }}>
                {movieList && movieList.length ? movieList.map((movie,index)=>(
                    <React.Fragment key={movie.imdbID}>
                    {selectedMovie && !isMobile && selectedMovie.title && showPreview(index) &&
                        <Grid item xs={4} sm={2} md={10} className={'transition'}>
                            <Preview movie={selectedMovie} />
                        </Grid>
                    }
                    <Grid item xs={1} sm={2} md={2}>
                        <MovieCard movie={movie} handleClick={(el)=>handleClick(el,index)}/>
                    </Grid>
                    </React.Fragment>
                )) : <div style={{margin: '30px'}}>No results found</div>}
            </Grid>
        </section>
    )
}
export default Movies