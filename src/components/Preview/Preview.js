import { useEffect, useState } from 'react'
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import './Preview.css'


const Preview = ({movie}) =>{
    const [isMounted,updateMount] = useState(false)
    useEffect(()=>{
        updateMount(true)
    },[isMounted])

    return (
        <Grow
        in={isMounted}
        style={{ transformOrigin: '0 0 0' }}
        {...(isMounted ? { timeout: 1000 } : {})}
      >
            <div className='movie-preview'>
                <div id='preview-image' style={{backgroundImage: `url(${movie.poster})`}}></div>
                <div id='preview-content'>
                    <div className='movie-details'>
                        <h1 className='preview-content-title'>{movie.title}</h1>
                        <div className='movie-rating'>
                            <Slider min={0} max={10}   defaultValue={isNaN(movie.imdbRating) ? 0 : Number(movie.imdbRating)} aria-label="Default" valueLabelDisplay="auto" disabled/>
                            <div className='rating-label'>{isNaN(movie.imdbRating) ? movie.imdbRating : movie.imdbRating + '/10'}</div>
                        </div>
                        <div className='movie-stats'>
                            <label>Year:</label>
                            <span>{movie.year}</span>
                        </div>
                        <div className='movie-stats'>
                            <label>Running Time:</label>
                            <span>{movie.runtime}</span>
                        </div>
                        <div className='movie-stats'>
                            <label>Directed By:</label>
                            <span>{movie.director}</span>
                        </div>
                        <div className='movie-stats'>
                            <label>Language</label>
                            <span>{movie.language}</span>
                        </div>
                        <div className='movie-plot'>
                            {movie.plot}
                        </div>
                    </div>
                    <div className='preview-btns'>
                            <Button variant="contained">Play Movie</Button>
                            <Button variant="outlined">Watch Trailer</Button>
                    </div>
                </div>
            </div>
      </Grow>
    )
}
export default Preview