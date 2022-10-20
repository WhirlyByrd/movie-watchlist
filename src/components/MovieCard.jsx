import React from 'react'
import classes from './MovieCard.module.css'


export default function MovieCard({movie, addMovie, removeMovie, watchList}) {

    const inWatchlist = watchList.filter((mov) => {
        return mov.id === movie.id
    });

    const button = inWatchlist.length === 0 ? (
        <button onClick={() => addMovie(movie)}>Add To List</button>
    ) : (
        <button onClick={() => removeMovie(movie)}>Remove Movie</button>
    );

  return (
    <div className={classes['movie-card']}>
        <div>
            <img className={classes['cover-image']} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=''/>
            <h3 className={classes['movie-title']}>{movie.original_title}</h3>
        </div>
        {button}
    </div>
  )
}
