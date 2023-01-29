import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const MovieCard = ({movie,handleClick})=>{
  function updateSelectedMovie(){
    handleClick(movie)
  }
  
  return (
    <Card sx={{ maxWidth: 345 }} onClick={updateSelectedMovie}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={movie.poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
      </CardContent>
      <CardActions>
        <PlayCircleOutlineIcon />
        <AddCircleOutlineIcon />
      </CardActions>
    </Card>
  );
}
export default MovieCard