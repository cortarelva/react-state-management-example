import React,{useState, useContext} from 'react';
import Movie from '../components/Movie';
import {MovieContext} from '../components/MovieContext';



const MovieList = () =>{
  const [movies, setMovies] = useContext(MovieContext);

  return(
    <div>
      {movies.map(movie => (
      <Movie key={movie.id} name={movie.name} price={movie.price}/>
      ))}
    </div>
  );
}



export default MovieList;