import React from 'react'
import MovieCard from './MovieCard';
import classes from './Watchlist.module.css'
import './MovieCard.module.css'

export default function Watchlist({watchList, removeMovie}) {

  const movieDisplay = watchList.map((movie, index) => {
        return <MovieCard key ={index} movie={movie} watchList={watchList} removeMovie={removeMovie}/>
  });  

  return (
    <div className={classes['watchlist']}>
        <h1>My Watchlist</h1>
        <div className='movie-container'>
            {movieDisplay}
        </div>
    </div>
  )
}
